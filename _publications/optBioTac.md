---
title: "Optimizing BioTac Simulation for Realistic Tactile Perception"
collection: publications
permalink: /publication/optBioTac
excerpt: 'Topics: BioTac, XGBoost, Transformer, Tactile Perception.'
date: 2024-06-30
venue: 'International Joint Conference on Neural Network (IJCNN) 2024, Yokohama, Japan.'
paperurl: 'https://ieeexplore.ieee.org/document/10650656'
pub_type: 'full_paper'
citation: '<b>Wadhah Zai El Amri</b>, Nicolás Navarro-Guerrero (2024). &quot;Optimizing BioTac Simulation for Realistic Tactile Perception.&quot; <i>2024 International Joint Conference on Neural Networks (IJCNN), Yokohama, Japan, 2024, pp. 1-8, doi: 10.1109/IJCNN60899.2024.10650656.</i>.'
---
Accepted to the International Joint Conference on Neural Networks 2024 (IJCNN 2024)

Authors: Wadhah Zai El Amri, Nicolás Navarro-Guerrero.

Topics: BioTac, XGBoost, Transformer, Tactile Perception.

# Abstract: 

Tactile sensing presents a promising opportunity for enhancing the interaction capabilities of today’s robots. BioTac is a commonly used tactile sensor that enables robots to perceive and respond to physical tactile stimuli. However, the sensor’s non-linearity poses challenges in simulating its behavior. In this paper, we first investigate a BioTac simulation that uses temperature, force, and contact point positions to predict the sensor outputs. We show that training with BioTac temperature readings does not yield accurate sensor output predictions during deployment. Consequently, we tested three alternative models, i.e., an XGBoost regressor, a neural network, and a transformer encoder. We train these models without temperature readings and provide a detailed investigation of the window size of the input vectors. We demonstrate that we achieve statistically significant improvements over the baseline network. Furthermore, our results reveal that the XGBoost regressor and transformer outperform traditional feed-forward neural networks in this task. We make all our code and results available online on https://github.com/wzaielamri/Optimizing BioTac Simulation.

<p align="center">
___________________________________________________________________
</p>


## Preprint: 

[Download paper here](http://wzaielamri.github.io/assets/paper_files/optBioTac_zaielamri.pdf)

## Code: 

Our code is published online, along with all necessary checkpoints and a detailed installation guide.

Code: [<img src="../assets/images/GitHub-Mark.png" width="50" height="50">](https://github.com/wzaielamri/Optimizing_BioTac_Simulation)


## Citation

{% raw %}
```bibtex
@inproceedings{ZaiElAmri2024Optimizing,
  title = {Optimizing {{BioTac Simulation}} for {{Realistic Tactile Perception}}},
  booktitle = {International {{Joint Conference}} on {{Neural Networks}} ({{IJCNN}})},
  author = {{Zai El Amri}, {Wadhah} and {Navarro-Guerrero}, Nicol{\'a}s},
  year = {2024},
  publisher = {IEEE},
  address = {Yokohama, Japan},
  annotation = {https://github.com/wzaielamri/Optimizing\_BioTac\_Simulation}
}
```
{% endraw %}