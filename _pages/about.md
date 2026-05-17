---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

## About Me

I am **Wadhah Zai El Amri**, a PhD researcher at the **[L3S Research Center](https://www.l3s.de/)**, Leibniz University Hannover, Germany. My work lies at the intersection of **robotic perception**, **tactile sensing**, and **machine learning**, with a particular focus on enabling robots to perceive and understand physical contact with the world.

I received my M.Sc. in Intelligent Systems from Bielefeld University, Germany, in 2022, and my B.Eng. in Computer Engineering from Bielefeld University of Applied Sciences, Germany, in 2020.

**Research Interests:** Tactile sensing for robotics, transfer learning across sensor modalities, vibro-acoustic perception, deep reinforcement learning, and sim-to-real transfer.

Feel free to reach out if you are interested in collaborating or discussing any of these topics.

---

## News

- **Apr 2026** &mdash; Paper accepted to *Elsevier Robotics and Autonomous Systems*: [SPLIT: Separating Physical-Contact via Latent Arithmetic in Image-Based Tactile Sensors](/publication/split)
- **Jan 2026** &mdash; Preprint submitted: [Vibro-Sense: Robust Vibration-based Impulse Response Localization and Trajectory Tracking for Robotic Hands](/publication/vibrosense)
- **Aug 2025** &mdash; Preprint submitted: [Do Robots Really Need Anthropomorphic Hands?](/publication/robotic_hand)
- **May 2025** &mdash; Paper accepted to *ICRA 2025*: [ACROSS: A Deformation-Based Cross-Modal Representation for Robotic Tactile Perception](/publication/across)

---

## Publications

  <div>{% assign pubs = site.publications | reverse %}{% for post in pubs limit:4 %}
      {% include archive-single-cv.html %}
  {% endfor %}</div>

  <p><a href="/publications/">See all publications →</a></p>

---

## Projects

  <ul style="padding-left:0; list-style:none;">{% for post in site.projects %}
    <li style="border-bottom:1px solid #e8e8e8; padding-bottom:1.2em; margin-bottom:0.8em;">
      {% if post.project_type == 'side_project' %}<span style='background:#e8f0fe;color:#1a73e8;border-radius:4px;padding:2px 8px;font-size:0.8em;font-weight:600;margin-right:6px;'>Side Project</span>{% elsif post.project_type == 'research_project' %}<span style='background:#e0f2f1;color:#00695c;border-radius:4px;padding:2px 8px;font-size:0.8em;font-weight:600;margin-right:6px;'>Research Project</span>{% endif %}
      <h3 class="archive__item-title" style="margin-top:0.3em;"><a href="{{ post.url }}">{{ post.title }}</a></h3>
      <p class="archive__item-excerpt">{{ post.excerpt | truncatewords: 20 }}</p>
    </li>
  {% endfor %}</ul>

  <p><a href="/projects/">See all projects →</a></p>
