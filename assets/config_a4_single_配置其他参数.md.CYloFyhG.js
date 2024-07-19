import{_ as s,c as a,o as i,a4 as e}from"./chunks/framework.Cj1MMFA6.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"config_a4/single/配置其他参数.md","filePath":"config_a4/single/配置其他参数.md","lastUpdated":null}'),t={name:"config_a4/single/配置其他参数.md"},n=e(`<div class="info custom-block"><p class="custom-block-title">INFO</p><p>当你新建了一篇md文章，可以在该md文章的<code>front-matter</code>区域，单独配置这篇文章的特性，比如这篇文章属于什么分类/标签、开关评论、开关目录...</p><p>举例我的一篇文章的<code>front-matter</code>：</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">2024年6月至7月初写过的无聊的诗</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2024-07-02 23:31:00</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">categories</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">情绪</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">tags</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">记忆</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">诗</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">hide</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">toc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">password</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">words</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span></code></pre></div></div><hr><details class="details custom-block"><summary>Details</summary><p><a href="/config_a4/whole/配置分类标签页.html">配置分类标签页面</a></p></details><h4 id="归属该篇文章分类" tabindex="-1">归属该篇文章分类 <a class="header-anchor" href="#归属该篇文章分类" aria-label="Permalink to &quot;归属该篇文章分类&quot;">​</a></h4><p>目前A4只支持一篇文章只能归属<strong>一个分类</strong>，在对应<code>md</code>文件的<code>front-matter</code>中添加参数：</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">categories:</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> xx</span></span></code></pre></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>个人认为多级分类将会使得分类和标签的意义混乱，所以只采用了一篇文章属于一个分类、多个标签的模式。</p></div><h4 id="归属该篇文章标签" tabindex="-1">归属该篇文章标签 <a class="header-anchor" href="#归属该篇文章标签" aria-label="Permalink to &quot;归属该篇文章标签&quot;">​</a></h4><p>一篇文章可以归属多个标签，在对应<code>md</code>文件的<code>front-matter</code>中添加参数：</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tags:</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> xx1</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> xx2</span></span></code></pre></div><h4 id="关闭该篇文章的顶部目录" tabindex="-1">关闭该篇文章的顶部目录 <a class="header-anchor" href="#关闭该篇文章的顶部目录" aria-label="Permalink to &quot;关闭该篇文章的顶部目录&quot;">​</a></h4><p>在对应<code>md</code>文件的<code>front-matter</code>中添加参数：</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">toc: false</span></span></code></pre></div><h4 id="隐藏该篇文章" tabindex="-1">隐藏该篇文章 <a class="header-anchor" href="#隐藏该篇文章" aria-label="Permalink to &quot;隐藏该篇文章&quot;">​</a></h4><p>隐藏的意思是，该篇文章将不会在<code>列表页面</code>、<code>分类页面</code>、<code>标签页面</code>出现。而你可以通过url直接访问该篇文章。</p><p>在对应<code>md</code>文件的<code>front-matter</code>中添加参数：</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">hide: true</span></span></code></pre></div><h4 id="设置阅读该篇文章时-顶部显示的句子池" tabindex="-1">设置阅读该篇文章时，顶部显示的句子池 <a class="header-anchor" href="#设置阅读该篇文章时-顶部显示的句子池" aria-label="Permalink to &quot;设置阅读该篇文章时，顶部显示的句子池&quot;">​</a></h4><p>你可以在这里放一些该篇文章相关的句子/名人名言，当阅读该篇文章的时候，顶部将会随机展示。</p><p>在对应<code>md</code>文件的<code>front-matter</code>中添加参数：</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">words:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	- 己所不欲，勿施于人。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	- 人山人海，人来人往。</span></span></code></pre></div><h4 id="置顶该篇文章" tabindex="-1">置顶该篇文章 <a class="header-anchor" href="#置顶该篇文章" aria-label="Permalink to &quot;置顶该篇文章&quot;">​</a></h4><p>设置了该参数，这篇文章将出现在<code>列表页面</code>的置顶栏目中。<strong>数字越小越靠前。</strong></p><p>在对应<code>md</code>文件的<code>front-matter</code>中添加参数：</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">top: 1</span></span></code></pre></div><h4 id="开关该篇文章的评论功能" tabindex="-1">开关该篇文章的评论功能 <a class="header-anchor" href="#开关该篇文章的评论功能" aria-label="Permalink to &quot;开关该篇文章的评论功能&quot;">​</a></h4><p>当你配置了评论功能后，所有文章默认开启评论模式，如果你想关闭该篇文章的评论功能，在对应<code>md</code>文件的<code>front-matter</code>中添加参数：</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">comment: false</span></span></code></pre></div>`,28),l=[n];function p(h,d,o,c,k,r){return i(),a("div",null,l)}const m=s(t,[["render",p]]);export{g as __pageData,m as default};
