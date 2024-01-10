---
layout: archive
title: "Portfolio"
permalink: /portfolio/
author_profile: true
---

{% include base_path %}

🔬 Dive into my portfolio to explore a curated collection of simulation movies and techniques, each offering a unique glimpse into my research journey.

{% assign sorted_portfolio = site.portfolio | sort: 'date' | reverse %}
{% for post in sorted_portfolio %}
  {% include archive-single-portfolio.html %}
{% endfor %}

{% comment %}
{% for post in site.portfolio %}
  {% include archive-single-portfolio.html %}
{% endfor %}
{% endcomment %}

