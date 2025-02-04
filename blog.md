---
layout: page
title: 技术博客
permalink: /blog/
---
{% raw %}
<div class="post-list">
  {% for post in site.posts %}
  <article class="post-card">
    <!-- 分类标签 -->
    <div class="post-tags">
      {% for tag in post.tags %}
      <span class="tag">{{ tag }}</span>
      {% endfor %}
    </div>
    
    <!-- 文章标题 -->
    <h2 class="post-title">
      <a href="{{ post.url }}">{{ post.title }}</a>
    </h2>
    
    <!-- 元信息 -->
    <div class="post-meta">
      <span class="date">{{ post.date | date: "%Y-%m-%d" }}</span>
      <span class="readtime">{% include read-time.html content=post.content %}</span>
    </div>
    
    <!-- 摘要 -->
    <p class="post-excerpt">{{ post.excerpt | strip_html | truncate: 120 }}</p>
  </article>
  {% endfor %}
</div>
{% endraw %}

<input type="text" id="blog-search" placeholder="搜索文章...">
<script src="/assets/js/search.js"></script>
