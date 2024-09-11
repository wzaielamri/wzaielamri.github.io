---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% unless post.title == "ACROSS: A Deformation-Based Cross-Modal Representation for Robotic Tactile Perception" %}
  {% include archive-single.html %}
{% endfor %}
