import{_ as s,c as i,o as a,a4 as e}from"./chunks/framework.Cj1MMFA6.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"config_a4/whole/配置文章页.md","filePath":"config_a4/whole/配置文章页.md","lastUpdated":null}'),n={name:"config_a4/whole/配置文章页.md"},l=e(`<details class="details custom-block"><summary>Details</summary><p>这里的配置皆节选自 <code>_config.a4.yml</code>文件，本身该文件注释已足够详细，可直接参考原文件注释配置你的A4。</p></details><hr><h3 id="确认是否已经生成文章列表页面" tabindex="-1">确认是否已经生成文章列表页面 <a class="header-anchor" href="#确认是否已经生成文章列表页面" aria-label="Permalink to &quot;确认是否已经生成文章列表页面&quot;">​</a></h3><p>执行命令，生成一个文章列表页面。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hexo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> new</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> page</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span></span></code></pre></div><hr><h3 id="📑在-config-a4-yml文件中与文章页-除首页之外的页面-相关的内容" tabindex="-1">📑在<code>_config.a4.yml</code>文件中与文章页（除首页之外的页面）相关的内容 <a class="header-anchor" href="#📑在-config-a4-yml文件中与文章页-除首页之外的页面-相关的内容" aria-label="Permalink to &quot;📑在\`_config.a4.yml\`文件中与文章页（除首页之外的页面）相关的内容&quot;">​</a></h3><h4 id="配置菜单链接" tabindex="-1">配置菜单链接 <a class="header-anchor" href="#配置菜单链接" aria-label="Permalink to &quot;配置菜单链接&quot;">​</a></h4><p>如果想修改（非首页）菜单的链接显示，修改<code>_config.a4.yml</code>的<code>menu</code>配置项即可。</p><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">menu</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">	首页</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #需要hexo new page index,在index/index.md填写的内容将会展现在首页上</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">	文章</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/list/</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 需要hexo new page list</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 添加其他页面格式举例：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 关于: /about/ # 需要hexo new page about</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 标签: /tags/ #需要hexo new page tags</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 分类: /categories/ # 需要hexo new page categories</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # ...</span></span></code></pre></div><h4 id="添加底部自定义链接" tabindex="-1">添加底部自定义链接 <a class="header-anchor" href="#添加底部自定义链接" aria-label="Permalink to &quot;添加底部自定义链接&quot;">​</a></h4><ol><li>执行命令，先生成一个自定义页面，如想生成<code>支持</code>页面：</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hexo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> new</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> page</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> support</span></span></code></pre></div><ol start="2"><li>修改配置文件<code>_config.a4.yml</code>的<code>footerLink</code>配置项,如添加</li></ol><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">footerLink</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 底部的链接自定义</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  info</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">© 1949-2023 china</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # info这个单词不能修改，不想使用可为空</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  支持</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/support/</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #这里！！即是配置上一步生成的页面！！</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 添加链接格式举例</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 友链: /friends/</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 联系: /contact/</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 支持: /support/</span></span></code></pre></div><h4 id="修改页面的页脚及宽度等其他设置" tabindex="-1">修改页面的页脚及宽度等其他设置 <a class="header-anchor" href="#修改页面的页脚及宽度等其他设置" aria-label="Permalink to &quot;修改页面的页脚及宽度等其他设置&quot;">​</a></h4><ul><li>如果想修改页脚内容，修改<code>_condif.a4.yml</code>的<code>post</code>配置项的<code>footer</code>即可。</li><li>如果想开关本站使用A4信息，修改<code>_condif.a4.yml</code>的<code>post</code>配置项的<code>themeInfo</code>即可。</li><li>如果想修改（除首页外）的页面宽度，修改<code>_condif.a4.yml</code>的<code>width</code>配置项即可。</li></ul><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">post</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#除首页之外页面</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  footer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">🌊看过大海的人不会忘记海的广阔🌊</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 底部左侧 自定义信息</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  themeInfo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # true | false  # 是否开启 底部右侧 声明本站信息</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  endContent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">以上</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 当你使用了 评论功能，此配置才会生效</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">middle</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # middle | big # 宽度</span></span></code></pre></div><h4 id="配置头像" tabindex="-1">配置头像 <a class="header-anchor" href="#配置头像" aria-label="Permalink to &quot;配置头像&quot;">​</a></h4><p>如果想设置头像，修改<code>_config.a4.yml</code>的<code>favicon</code>配置项即可。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>你可以先在source目录下创建一个img目录，然后把头像放在img目录下，比如你的头像图片名称叫做<code>favicon.webp</code>，那么你可以在<code>_config.a4.yml</code>文件中如下配置：</p><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 相对于source目录下的头像url</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">favicon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/img/favicon.webp</span></span></code></pre></div></div>`,21),t=[l];function h(p,k,d,o,c,r){return a(),i("div",null,t)}const E=s(n,[["render",h]]);export{y as __pageData,E as default};
