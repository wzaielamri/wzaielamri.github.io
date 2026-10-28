---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% include base_path %}

{% assign pubs = site.publications | reverse %}
{% assign full_papers = pubs | where: "pub_type", "full_paper" %}
{% assign abstracts = pubs | where: "pub_type", "extended_abstract" %}
{% assign preprints = pubs | where: "pub_type", "preprint" %}

<div class="archive__toolbar">
  {% comment %}Shown by custom.js; without JS every card stays visible.{% endcomment %}
  <div class="card-filters" role="group" aria-label="Filter by type" hidden>
    <button type="button" class="card-filter" data-filter="all" aria-pressed="true">All <span>{{ pubs.size }}</span></button>
    <button type="button" class="card-filter" data-filter="full_paper" aria-pressed="false">Full Papers <span>{{ full_papers.size }}</span></button>
    <button type="button" class="card-filter" data-filter="extended_abstract" aria-pressed="false">Extended Abstracts <span>{{ abstracts.size }}</span></button>
    <button type="button" class="card-filter" data-filter="preprint" aria-pressed="false">Preprints <span>{{ preprints.size }}</span></button>
  </div>
  {% if site.author.googlescholar %}
    <a class="archive__scholar" href="{{ site.author.googlescholar }}" title="All my articles on Google Scholar"><i class="fas fa-graduation-cap" aria-hidden="true"></i> Google Scholar <span aria-hidden="true">↗</span></a>
  {% endif %}
</div>

<div class="card-grid">
{% for post in pubs %}
  {% include archive-card.html %}
{% endfor %}
</div>
