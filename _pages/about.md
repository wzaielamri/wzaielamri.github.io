---
permalink: /
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

# About Me

I am **Wadhah Zai El Amri**, a PhD researcher at the **[L3S Research Center](https://www.l3s.de/)**, Leibniz University Hannover, Germany. My work lies at the intersection of **robotic perception**, **tactile sensing**, and **machine learning**, with a particular focus on enabling robots to perceive and understand physical contact with the world.

I received my M.Sc. in Intelligent Systems from Bielefeld University, Germany, in 2022, and my B.Eng. in Computer Engineering from Bielefeld University of Applied Sciences, Germany, in 2020.

**Research Interests:**

<ul class="chips">
  <li>Tactile sensing for robotics</li>
  <li>Transfer learning across sensor modalities</li>
  <li>Vibro-acoustic perception</li>
  <li>Deep reinforcement learning</li>
  <li>Sim-to-real transfer</li>
</ul>

Feel free to reach out if you are interested in collaborating or discussing any of these topics.

## News

<div class="news" markdown="1">

- **Jul 2026** Paper published in *Springer Journal of Intelligent &amp; Robotic Systems (Q1)*: [Do Robots Really Need Anthropomorphic Hands? A Comparison of Human and Robotic Hands](/publication/robotic_hand)
- **Jun 2026** Two Extended Abstracts accepted to *the International Joint Conference on Artificial Intelligence (IJCAI)* Workshop: [AI-Based Humanoid Robot Design and Control Through the Lens of HRI, Evolution, and Biomechanics](https://hominoid-robot.dfki-bremen.de)
- **Apr 2026** Paper published in *Elsevier Robotics and Autonomous Systems (Q1)*: [SPLIT: Separating Physical-Contact via Latent Arithmetic in Image-Based Tactile Sensors](/publication/split)
- **Jan 2026** Preprint submitted: [Vibro-Sense: Robust Vibration-based Impulse Response Localization and Trajectory Tracking for Robotic Hands](/publication/vibrosense)
- **May 2025** Paper accepted to *ICRA 2025 (A\*)*: [ACROSS: A Deformation-Based Cross-Modal Representation for Robotic Tactile Perception](/publication/across)

</div>

## Recent Publications

<div class="card-grid card-grid--wide">
{% assign pubs = site.publications | reverse %}{% for post in pubs limit:4 %}
  {% include archive-card.html %}
{% endfor %}
</div>

<p><a class="see-all" href="/publications/">See all publications <span aria-hidden="true">→</span></a></p>

## Projects

<div class="card-grid card-grid--wide">
{% assign projects = site.projects | sort: "order" %}{% for post in projects %}
  {% include archive-card.html %}
{% endfor %}
</div>

<p><a class="see-all" href="/projects/">See all projects <span aria-hidden="true">→</span></a></p>
