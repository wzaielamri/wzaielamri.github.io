---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if site.author.googlescholar %}
  <p class="archive__lead">You can also find my articles on <a href="{{ site.author.googlescholar }}">my Google Scholar profile</a>.</p>
{% endif %}

{% include base_path %}

{% assign pubs = site.publications | reverse %}
{% assign full_papers = pubs | where: "pub_type", "full_paper" %}
{% assign abstracts = pubs | where: "pub_type", "extended_abstract" %}
{% assign preprints = pubs | where: "pub_type", "preprint" %}

{% comment %}Shown by custom.js; without JS every card stays visible.{% endcomment %}
<div class="card-filters" role="group" aria-label="Filter by type" hidden>
  <button type="button" class="card-filter" data-filter="all" aria-pressed="true">All <span>{{ pubs.size }}</span></button>
  <button type="button" class="card-filter" data-filter="full_paper" aria-pressed="false">Full Papers <span>{{ full_papers.size }}</span></button>
  <button type="button" class="card-filter" data-filter="extended_abstract" aria-pressed="false">Extended Abstracts <span>{{ abstracts.size }}</span></button>
  <button type="button" class="card-filter" data-filter="preprint" aria-pressed="false">Preprints <span>{{ preprints.size }}</span></button>
</div>

<div class="card-grid">
{% for post in pubs %}
  {% include archive-card.html %}
{% endfor %}
</div>
