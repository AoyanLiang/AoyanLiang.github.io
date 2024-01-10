---
layout: archive
title: "Gallery"
permalink: /gallery/
author_profile: true
---

{% include base_path %}

## Sample videos, more coming

{% for post in site.portfolio %}
  {% include archive-single-gallery.html %}
{% endfor %}

