import{c as D}from"./chunks/index.7961a6f4.js";import{B as C,o as F,c,D as a,z as n,a as l,a1 as y,N as r,x as p}from"./chunks/framework.a3a9685a.js";const B={class:"basic block"},i={__name:"Close",setup(A){const o=()=>{D({message:"hello world",showClose:!0,duration:0})};return(t,s)=>{const e=C("vk-button");return F(),c("div",B,[a(e,{onClick:o},{default:n(()=>[l("可关闭消息")]),_:1})])}}},d=i,g={class:"basic block"},u={__name:"Type",setup(A){const o=t=>{D({message:"hello world",type:t})};return(t,s)=>{const e=C("vk-button");return F(),c("div",g,[a(e,{onClick:s[0]||(s[0]=E=>o("success"))},{default:n(()=>[l("Success")]),_:1}),a(e,{onClick:s[1]||(s[1]=E=>o("info"))},{default:n(()=>[l("Info")]),_:1}),a(e,{onClick:s[2]||(s[2]=E=>o("warning"))},{default:n(()=>[l("warning")]),_:1}),a(e,{onClick:s[3]||(s[3]=E=>o("danger"))},{default:n(()=>[l("Danger")]),_:1})])}}},m=u,_={class:"basic block"},h={__name:"Basic",setup(A){const o=()=>{D({message:"hello world"})},t=()=>{D({message:y("b","this is bold")})};return(s,e)=>{const E=C("vk-button");return F(),c("div",_,[a(E,{type:"primary",onClick:o},{default:n(()=>[l("创建一条消息")]),_:1}),a(E,{onClick:t},{default:n(()=>[l("创建支持 VNode 的消息")]),_:1})])}}},f=h,b=r('<h1 id="message-消息提示" tabindex="-1">Message 消息提示 <a class="header-anchor" href="#message-消息提示" aria-label="Permalink to &quot;Message 消息提示&quot;">​</a></h1><p>常用于主动操作后的反馈提示</p><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p>从顶部出现，3 秒后自动消失。注册了一个 <code>createMessage</code> 方法用于调用。 <code>Message</code> 可以接收一个字符串或一个 <code>VNode</code> 作为参数，它会被显示为正文内容。</p>',4),v=p("h2",{id:"不同状态",tabindex:"-1"},[l("不同状态 "),p("a",{class:"header-anchor",href:"#不同状态","aria-label":'Permalink to "不同状态"'},"​")],-1),k=p("p",null,[l("用来显示「成功、警告、消息、错误」类的操作反馈。设置 "),p("code",null,"type"),l(" 字段可以定义不同的状态，默认为 "),p("code",null,"info"),l("。")],-1),x=r('<h2 id="可关闭的消息提示" tabindex="-1">可关闭的消息提示 <a class="header-anchor" href="#可关闭的消息提示" aria-label="Permalink to &quot;可关闭的消息提示&quot;">​</a></h2><p>可以添加关闭按钮。</p><p>默认的 <code>Message</code> 是不可以被人工关闭的。 如果你需要手动关闭功能，你可以把 <code>showClose</code> 设置为 <code>true</code>，<code>Message</code> 拥有可控的 <code>duration</code>， 默认的关闭时间为 <code>3000</code> 毫秒，当把这个属性的值设置为 <code>0</code> 便表示该消息不会被自动关闭。</p>',3),M=r('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="message-配置项" tabindex="-1">Message 配置项 <a class="header-anchor" href="#message-配置项" aria-label="Permalink to &quot;Message 配置项&quot;">​</a></h3><p>使用 <code>createMessage</code> 创建信息，它接受一个 <code>Object</code>，以下是 <code>Object</code> 中的属性列表。</p><table><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td style="text-align:left;">message</td><td style="text-align:left;">消息文字</td><td style="text-align:left;"><code>string | VNode</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">type</td><td style="text-align:left;">消息类型</td><td style="text-align:left;"><code>success | info | warning | danger</code></td><td style="text-align:left;">info</td></tr><tr><td style="text-align:left;">duration</td><td style="text-align:left;">显示时间，单位为毫秒。 设为 0 则不会自动关闭</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">3000</td></tr><tr><td style="text-align:left;">showClose</td><td style="text-align:left;">是否显示关闭按钮</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">offset</td><td style="text-align:left;">Message 距离窗口顶部的偏移量</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">20</td></tr><tr><td style="text-align:left;">transitionName</td><td style="text-align:left;">动画名称</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">fade-up</td></tr></tbody></table><h3 id="message-方法" tabindex="-1">Message 方法 <a class="header-anchor" href="#message-方法" aria-label="Permalink to &quot;Message 方法&quot;">​</a></h3><p>调用 <code>createMessage</code> 会返回当前 <code>Message</code> 的实例。 如果需要手动关闭实例，可以调用它的 <code>destroy</code> 方法。</p><table><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">描述</th><th style="text-align:left;">类型</th></tr></thead><tbody><tr><td style="text-align:left;">destroy</td><td style="text-align:left;">关闭当前的 Message</td><td style="text-align:left;"><code>() =&gt; void</code></td></tr></tbody></table>',7),P=JSON.parse('{"title":"Message 消息提示","description":"Message 组件文档","frontmatter":{"title":"Message 消息提示","description":"Message 组件文档"},"headers":[],"relativePath":"components/message.md"}'),q={name:"components/message.md"},N=Object.assign(q,{setup(A){return(o,t)=>{const s=C("demo-preview");return F(),c("div",null,[b,a(s,{title:"基础用法",description:"Message 组件的基础用法",code:"%3Ctemplate%3E%0D%0A%20%20%3Cdiv%20class=%22basic%20block%22%3E%0D%0A%20%20%20%20%3Cvk-button%20type=%22primary%22%20@click=%22open%22%3E%E5%88%9B%E5%BB%BA%E4%B8%80%E6%9D%A1%E6%B6%88%E6%81%AF%3C/vk-button%3E%0D%0A%20%20%20%20%3Cvk-button%20@click=%22open2%22%3E%E5%88%9B%E5%BB%BA%E6%94%AF%E6%8C%81%20VNode%20%E7%9A%84%E6%B6%88%E6%81%AF%3C/vk-button%3E%0D%0A%20%20%3C/div%3E%0D%0A%3C/template%3E%0D%0A%0D%0A%3Cscript%20setup%3E%0D%0Aimport%20%7B%20h%20%7D%20from%20'vue';%0D%0Aimport%20%7B%20createMessage%20%7D%20from%20'@/components/Message';%0D%0A%0D%0Aconst%20open%20=%20()%20=%3E%20%7B%0D%0A%20%20createMessage(%7B%20message:%20'hello%20world'%20%7D);%0D%0A%7D;%0D%0Aconst%20open2%20=%20()%20=%3E%20%7B%0D%0A%20%20createMessage(%7B%20message:%20h('b',%20'this%20is%20bold')%20%7D);%0D%0A%7D;%0D%0A%3C/script%3E%0D%0A",showCode:"%3Cpre%20v-pre%20class%3D%22shiki%20material-theme-palenight%22%20%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23BABED8%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3Eclass%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C3E88D%22%3Ebasic%20block%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23BABED8%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Evk-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3Etype%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C3E88D%22%3Eprimary%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3E%40click%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C3E88D%22%3Eopen%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BABED8%22%3E%E5%88%9B%E5%BB%BA%E4%B8%80%E6%9D%A1%E6%B6%88%E6%81%AF%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Evk-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23BABED8%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Evk-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3E%40click%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C3E88D%22%3Eopen2%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BABED8%22%3E%E5%88%9B%E5%BB%BA%E6%94%AF%E6%8C%81%20VNode%20%E7%9A%84%E6%B6%88%E6%81%AF%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Evk-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23BABED8%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BABED8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3Esetup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%3B%20font-style%3A%20italic%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BABED8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BABED8%22%3Eh%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BABED8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%3B%20font-style%3A%20italic%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BABED8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C3E88D%22%3Evue%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%3B%20font-style%3A%20italic%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BABED8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BABED8%22%3EcreateMessage%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BABED8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%3B%20font-style%3A%20italic%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BABED8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C3E88D%22%3E%40%2Fcomponents%2FMessage%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BABED8%22%3E%20open%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BABED8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E()%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BABED8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BABED8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2382AAFF%22%3EcreateMessage%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20message%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C3E88D%22%3Ehello%20world%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E)%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7D%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BABED8%22%3E%20open2%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BABED8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E()%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BABED8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BABED8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2382AAFF%22%3EcreateMessage%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20message%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2382AAFF%22%3Eh%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C3E88D%22%3Eb%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%2C%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C3E88D%22%3Ethis%20is%20bold%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E)%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E)%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7D%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E",suffixName:"vue",absolutePath:"D:\\code\\v3-element\\docs\\demo\\Message\\Basic.vue",relativePath:"../demo/Message/Basic.vue"},{default:n(()=>[a(f)]),_:1}),v,k,a(s,{title:"不同状态",description:"Message 组件的不同状态",code:"%3Ctemplate%3E%0D%0A%20%20%3Cdiv%20class=%22basic%20block%22%3E%0D%0A%20%20%20%20%3Cvk-button%20@click=%22open('success')%22%3ESuccess%3C/vk-button%3E%0D%0A%20%20%20%20%3Cvk-button%20@click=%22open('info')%22%3EInfo%3C/vk-button%3E%0D%0A%20%20%20%20%3Cvk-button%20@click=%22open('warning')%22%3Ewarning%3C/vk-button%3E%0D%0A%20%20%20%20%3Cvk-button%20@click=%22open('danger')%22%3EDanger%3C/vk-button%3E%0D%0A%20%20%3C/div%3E%0D%0A%3C/template%3E%0D%0A%0D%0A%3Cscript%20setup%3E%0D%0Aimport%20%7B%20createMessage%20%7D%20from%20'@/components/Message';%0D%0A%0D%0Aconst%20open%20=%20(type)%20=%3E%20%7B%0D%0A%20%20createMessage(%7B%20message:%20'hello%20world',%20type%20%7D);%0D%0A%7D;%0D%0A%3C/script%3E%0D%0A",showCode:"%3Cpre%20v-pre%20class%3D%22shiki%20material-theme-palenight%22%20%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23BABED8%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3Eclass%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C3E88D%22%3Ebasic%20block%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23BABED8%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Evk-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3E%40click%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C3E88D%22%3Eopen(%26%2339%3Bsuccess%26%2339%3B)%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BABED8%22%3ESuccess%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Evk-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23BABED8%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Evk-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3E%40click%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C3E88D%22%3Eopen(%26%2339%3Binfo%26%2339%3B)%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BABED8%22%3EInfo%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Evk-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23BABED8%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Evk-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3E%40click%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C3E88D%22%3Eopen(%26%2339%3Bwarning%26%2339%3B)%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BABED8%22%3Ewarning%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Evk-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23BABED8%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Evk-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3E%40click%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C3E88D%22%3Eopen(%26%2339%3Bdanger%26%2339%3B)%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BABED8%22%3EDanger%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Evk-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23BABED8%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BABED8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3Esetup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%3B%20font-style%3A%20italic%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BABED8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BABED8%22%3EcreateMessage%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BABED8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%3B%20font-style%3A%20italic%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BABED8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C3E88D%22%3E%40%2Fcomponents%2FMessage%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BABED8%22%3E%20open%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BABED8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BABED8%3B%20font-style%3A%20italic%22%3Etype%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E)%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BABED8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BABED8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2382AAFF%22%3EcreateMessage%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20message%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C3E88D%22%3Ehello%20world%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%2C%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BABED8%22%3Etype%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E)%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7D%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E",suffixName:"vue",absolutePath:"D:\\code\\v3-element\\docs\\demo\\Message\\Type.vue",relativePath:"../demo/Message/Type.vue"},{default:n(()=>[a(m)]),_:1}),x,a(s,{title:"可关闭的消息提示",description:"Message 组件的可关闭的消息提示",code:"%3Ctemplate%3E%0D%0A%20%20%3Cdiv%20class=%22basic%20block%22%3E%0D%0A%20%20%20%20%3Cvk-button%20@click=%22open%22%3E%E5%8F%AF%E5%85%B3%E9%97%AD%E6%B6%88%E6%81%AF%3C/vk-button%3E%0D%0A%20%20%3C/div%3E%0D%0A%3C/template%3E%0D%0A%0D%0A%3Cscript%20setup%3E%0D%0Aimport%20%7B%20createMessage%20%7D%20from%20'@/components/Message';%0D%0A%0D%0Aconst%20open%20=%20()%20=%3E%20%7B%0D%0A%20%20createMessage(%7B%20message:%20'hello%20world',%20showClose:%20true,%20duration:%200%20%7D);%0D%0A%7D;%0D%0A%3C/script%3E%0D%0A",showCode:"%3Cpre%20v-pre%20class%3D%22shiki%20material-theme-palenight%22%20%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23BABED8%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3Eclass%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C3E88D%22%3Ebasic%20block%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23BABED8%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Evk-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3E%40click%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C3E88D%22%3Eopen%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BABED8%22%3E%E5%8F%AF%E5%85%B3%E9%97%AD%E6%B6%88%E6%81%AF%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Evk-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23BABED8%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BABED8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3Esetup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%3B%20font-style%3A%20italic%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BABED8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BABED8%22%3EcreateMessage%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BABED8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%3B%20font-style%3A%20italic%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BABED8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C3E88D%22%3E%40%2Fcomponents%2FMessage%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BABED8%22%3E%20open%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BABED8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E()%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BABED8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BABED8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2382AAFF%22%3EcreateMessage%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20message%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C3E88D%22%3Ehello%20world%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%2C%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20showClose%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF9CAC%22%3Etrue%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%2C%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20duration%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F78C6C%22%3E0%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E)%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7D%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E",suffixName:"vue",absolutePath:"D:\\code\\v3-element\\docs\\demo\\Message\\Close.vue",relativePath:"../demo/Message/Close.vue"},{default:n(()=>[a(d)]),_:1}),M])}}});export{P as __pageData,N as default};
