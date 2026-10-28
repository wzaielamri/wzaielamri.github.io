---
title: "Hierarchical Decentralized Deep Reinforcement Learning Architecture for a Simulated Four-Legged Agent"
collection: publications
permalink: /publication/hddrl
excerpt: 'Topics: Machine Learning, Deep Reinforcement Learning, Motor Control.'
date: 2022-09-21
venue: 'The 8th International Conference on Machine Learning, Optimization, and Data Science'
paperurl: 'https://link.springer.com/chapter/10.1007/978-3-031-25891-6_20'
pub_type: 'full_paper'
venue_short: 'LOD 2022'
code: 'https://github.com/wzaielamri/hddrl'
pdf: '/assets/paper_files/hddrl_zaielamri.pdf'
topics: ['Machine Learning', 'Deep Reinforcement Learning', 'Motor Control']
header:
  teaser: 'teasers/hddrl.jpg'
citation: '<b>Wadhah Zai El Amri</b>, Luca Hermes, Malte Schilling (2022). &quot;Hierarchical Decentralized Deep Reinforcement Learning Architecture for a Simulated Four-Legged Agent.&quot; <i>In: Nicosia, G., et al. Machine Learning, Optimization, and Data Science. LOD 2022. Lecture Notes in Computer Science, vol 13811. Springer, Cham. https://doi.org/10.1007/978-3-031-25891-6_20</i>.'
---

## Abstract

Legged locomotion is widespread in nature and has inspired the design of current robots. The controller of these legged robots is often realized as one centralized instance. However, in nature, control of movement happens in a hierarchical and decentralized fashion. Introducing these biological design principles into robotic control systems has motivated this work. We tackle the question whether decentralized and hierarchical control is beneficial for legged robots and present a novel decentral, hierarchical architecture to control a simulated legged agent. Three different tasks varying in complexity are designed to benchmark five architectures (centralized, decentralized, hierarchical and two different combinations of hierarchical decentralized architectures). The results demonstrate that decentralizing the different levels of the hierarchical architectures facilitates learning of the agent, ensures more energy efficient movements as well as robustness towards new unseen environments. Furthermore, this comparison sheds light on the importance of modularity in hierarchical architectures to solve complex goal-directed tasks. We provide an open-source code implementation of our architecture (https://github.com/wzaielamri/hddrl).

## Resources

<ul class="resources">
  <li><a href="https://github.com/wzaielamri/hddrl"><i class="fab fa-github" aria-hidden="true"></i> Code</a> Our code is published online, along with all necessary checkpoints and a detailed installation guide.</li>
</ul>

## Citation

{% raw %}
```bibtex
@InProceedings{ZaiElAmri2022HDDRL,
  author    = {{Zai El Amri}, Wadhah and Hermes, Luca and Schilling, Malte},
  title     = {Hierarchical Decentralized Deep Reinforcement Learning Architecture for a Simulated Four-Legged Agent},
  booktitle = {Proceedings of the 8th International Online \& Onsite Conference on Machine Learning, Optimization, and Data Science (LOD)},
  year      = {2022},
  doi       = {10.1007/978-3-031-25891-6_20},
}
```
{% endraw %}