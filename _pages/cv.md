---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume

# The timeline sections below are drawn by _includes/cv-timeline.html.
# Each entry: dates, title, and optionally org, note, topics and logo
# (a file in assets/images/logos/, shown on the timeline instead of the dot).
# title, org and note accept Markdown (links, *emphasis*).
education:
  - dates: 08/2022 – Present
    title: Ph.D. in Computer Science
    org: Leibniz University Hannover
    logo: luh.png
  - dates: 04/2020 – 04/2022
    title: M.S. in Intelligent Systems
    org: Bielefeld University
    logo: unibi.png
  - dates: 09/2016 – 01/2020
    title: B.Eng. in Computer Engineering
    org: Bielefeld University of Applied Sciences
    logo: hsbi.svg

work:
  - dates: 08/2022 – Present
    title: Research Associate
    org: L3S Research Center, Leibniz University Hannover – Germany
    logo: l3s.png
    topics: [Machine Learning, Robotics, Multi-Sensor Integration, Transfer Learning]
  - dates: 06/2020 – 04/2022
    title: Research Assistant
    org: Center for Applied Data Science in Gütersloh (CfADS) – Germany
    logo: cfads.png
    topics: [Machine Learning, Robotics]
  - dates: 08/2019 – 01/2020
    title: Intern
    org: Miele & Cie. KG in Gütersloh – Germany
    logo: miele.svg
    topics: [Artificial Intelligence, Data Science]
  - dates: 01/2019 – 07/2019
    title: Working Student
    org: Center for Applied Data Science in Gütersloh (CfADS) – Germany
    logo: cfads.png
    topics: [Machine Learning, Computer Vision]
  - dates: 12/2017 – 12/2018
    title: Working Student
    org: Ceres Vision GmbH in Bielefeld – Germany
    logo: ceres-vision.png
    topics: [Computer Vision]

visits:
  - dates: 08/2026
    title: Visiting Researcher
    org: Robot Perception Lab, King's College London, London – United Kingdom
    logo: kcl.svg
    note: "Host: [Prof. Dr. Shan Luo](https://www.kcl.ac.uk/people/shan-luo)"
    topics: [Robotic Tactile Sensing]

teaching:
  - dates: Summer Semester 2025
    title: Research Methods for Autonomous and Intelligent Systems
    org: Teaching Assistant, Leibniz University Hannover
  - dates: Summer Semester 2024
    title: Human-Robot Interaction
    org: Teaching Assistant, Leibniz University Hannover
  - dates: Summer Semester 2024
    title: Foundations of Information Retrieval
    org: Teaching Assistant, Leibniz University Hannover
  - dates: Summer Semester 2023
    title: Foundations of Information Retrieval
    org: Teaching Assistant, Leibniz University Hannover

skills:
  - group: Polyglot
    items: [Arabic, English, French, German, Learning Spanish]
  - group: Programming Languages
    items: [Python, C++, C, Assembler, Java, 'C#']
  - group: ML Frameworks
    items: [PyTorch, Keras, TensorFlow, RLlib]
  - group: Tools
    items: [ROS, MoveIt, MuJoCo, PyBullet, Gazebo, Isaac Gym/Sim]

hobbies: [Travelling, Astronomy, Running, Cycling, Chess]
---

{% include base_path %}

## Education
{% include cv-timeline.html entries=page.education %}

## Work experience
{% include cv-timeline.html entries=page.work %}

## Research visits
{% include cv-timeline.html entries=page.visits %}

## Publications
<ul class="timeline">
{% for post in site.publications reversed %}
  {% include cv-publication.html %}
{% endfor %}
</ul>

## Teaching experience
{% include cv-timeline.html entries=page.teaching %}

## Skills
<div class="skill-groups">
{% for group in page.skills %}
  <div class="skill-group">
    <span class="skill-group__label">{{ group.group }}</span>
    <ul class="chips chips--small">{% for item in group.items %}<li>{{ item }}</li>{% endfor %}</ul>
  </div>
{% endfor %}
</div>

## Hobbies
<ul class="chips">{% for hobby in page.hobbies %}<li>{{ hobby }}</li>{% endfor %}</ul>
