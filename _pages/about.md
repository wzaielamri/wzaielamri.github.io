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

**Research Interests:** Tactile sensing for robotics, transfer learning across sensor modalities, vibro-acoustic perception, deep reinforcement learning, and sim-to-real transfer.

Feel free to reach out if you are interested in collaborating or discussing any of these topics.

---

## News

- **Jul 2026** &mdash; Paper published in *Springer Journal of Intelligent &amp; Robotic Systems (Q1)*: [Do Robots Really Need Anthropomorphic Hands? A Comparison of Human and Robotic Hands](/publication/robotic_hand)
- **Jun 2026** &mdash; Two Extended Abstracts accepted to *the International Joint Conference on Artificial Intelligence (IJCAI)* Workshop: [AI-Based Humanoid Robot Design and Control Through the Lens of HRI, Evolution, and Biomechanics](https://hominoid-robot.dfki-bremen.de)
- **Apr 2026** &mdash; Paper published in *Elsevier Robotics and Autonomous Systems (Q1)*: [SPLIT: Separating Physical-Contact via Latent Arithmetic in Image-Based Tactile Sensors](/publication/split)
- **Jan 2026** &mdash; Preprint submitted: [Vibro-Sense: Robust Vibration-based Impulse Response Localization and Trajectory Tracking for Robotic Hands](/publication/vibrosense)
- **May 2025** &mdash; Paper accepted to *ICRA 2025 (A\*)*: [ACROSS: A Deformation-Based Cross-Modal Representation for Robotic Tactile Perception](/publication/across)

---

## Publications

  <div>{% assign pubs = site.publications | reverse %}{% for post in pubs limit:4 %}
      {% include archive-single-cv.html %}
  {% endfor %}</div>

  <p><a href="/publications/">See all publications →</a></p>

---

## Projects

  <div>{% for post in site.projects %}
    <div class="list__item">
      <article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">
        {% if post.project_type == 'side_project' %}<span class="pub-badge pub-badge--side-project">Side Project</span>{% elsif post.project_type == 'research_project' %}<span class="pub-badge pub-badge--research-project">Research Project</span>{% endif %}
        <h3 class="archive__item-title" itemprop="headline" style="margin-top: 0.3em;"><a href="{{ post.url }}" rel="permalink">{{ post.title }}</a></h3>
        <p class="archive__item-excerpt" itemprop="description">{{ post.excerpt | truncatewords: 20 }}</p>
      </article>
    </div>
  {% endfor %}</div>

  <p><a href="/projects/">See all projects →</a></p>
