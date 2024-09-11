---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---
## Welcome

Hey,

My name is **Wadhah**, and I am pursuing my **PhD at L3S Research Center** in Germany. As a scientific researcher, I enjoy using my skills to contribute to the exciting technological advances that happen every day in the **artificial intelligence** field. I graduated from Bielefeld University in 2022 with a master's degree in Intelligent Systems.

My **research interests** include artificial intelligence, machine learning, reinforcement learning, robotics and computer vision.

If you are intressted in discussing such topics feel free to contact me 😊 .


## Publications

  <ul>{% for post in site.publications reversed %}
    {% unless post.permalink == "/publication/across" %}
      {% include archive-single-cv.html %}
    {% endunless %}
  {% endfor %}</ul>
