# blog.md 完整内容
---
layout: page
title: 柒柒工坊
permalink: /blog/
---

{% include categories.html %}

<!-- 文章列表 -->
<div class="posts">
  {% for post in site.posts %}
  <article class="post-item">
    <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
    <div class="post-meta">
      {{ post.date | date: "%Y-%m-%d" }} | 
      {% for category in post.categories %}
        <span class="category">{{ category }}</span>
      {% endfor %}
    </div>
  </article>
  {% endfor %}
</div>

<!-- 引入搜索 -->
<input type="text" id="blog-search" placeholder="搜索文章...">
<script src="/assets/js/search.js"></script>
