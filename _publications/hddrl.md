---
title: "Hierarchical Decentralized Deep Reinforcement Learning Architecture for a Simulated Four-Legged Agent"
collection: publications
permalink: /publication/hddrl
excerpt: 'Topics: Machine Learning, Deep Reinforcement Learning, Motor Control.'
date: 2022-09-21
venue: 'The 8th International Conference on Machine Learning, Optimization, and Data Science'
paperurl: 'https://link.springer.com/chapter/10.1007/978-3-031-25891-6_20'
pub_type: 'full_paper'
citation: '<b>Wadhah Zai El Amri</b>, Luca Hermes, Malte Schilling (2022). &quot;Hierarchical Decentralized Deep Reinforcement Learning Architecture for a Simulated Four-Legged Agent.&quot; <i>In: Nicosia, G., et al. Machine Learning, Optimization, and Data Science. LOD 2022. Lecture Notes in Computer Science, vol 13811. Springer, Cham. https://doi.org/10.1007/978-3-031-25891-6_20</i>.'
---

Accepted to the International Conference on Machine Learning, Optimization, and Data Science.

Authors: Wadhah Zai El Amri, Luca Hermes, Malte Schilling.

Topics: Machine Learning, Deep Reinforcement Learning, Motor Control.


# Abstract: 

Legged locomotion is widespread in nature and has inspired the design of current robots. The controller of these legged robots is often realized as one centralized instance. However, in nature, control of movement happens in a hierarchical and decentralized fashion. Introducing these biological design principles into robotic control systems has motivated this work. We tackle the question whether decentralized and hierarchical control is beneficial for legged robots and present a novel decentral, hierarchical architecture to control a simulated legged agent. Three different tasks varying in complexity are designed to benchmark five architectures (centralized, decentralized, hierarchical and two different combinations of hierarchical decentralized architectures). The results demonstrate that decentralizing the different levels of the hierarchical architectures facilitates learning of the agent, ensures more energy efficient movements as well as robustness towards new unseen environments. Furthermore, this comparison sheds light on the importance of modularity in hierarchical architectures to solve complex goal-directed tasks. We provide an open-source code implementation of our architecture (https://github.com/wzaielamri/hddrl).

<p align="center">
___________________________________________________________________
</p>


## Preprint: 

[Download paper here](http://wzaielamri.github.io/assets/paper_files/hddrl_zaielamri.pdf)

## Code: 

Our code is published online, along with all necessary checkpoints and a detailed installation guide.

[<img src="../assets/images/GitHub-Mark.png" width="50" height="50">](https://github.com/wzaielamri/hddrl)

## Citation

{% raw %}
```bibtex
@article{wzaielamri_HDDRL,
  title={Hierarchical Decentralized Deep Reinforcement Learning Architecture for a Simulated Four-Legged Agent.},
  author={{Wadhah} {Zai El Amri} and Luca Hermes and Malte Schilling},
  journal={Proc. of 8th International Online & Onsite Conference on Machine Learning, Optimization, and Data Science.},
  year={2022}
}
```
{% endraw %}