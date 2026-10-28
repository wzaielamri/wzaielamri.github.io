---
title: "Transferring Tactile Data Across Sensors"
collection: publications
permalink: /publication/transferTactileExtAbstract
excerpt: 'Topics: BioTac, DIGIT, Tactile sensors, Transfer learning.'
date: 2024-09-23
venue: '40th Anniversary of the IEEE Conference on Robotics and Automation (ICRA@40)'
paperurl: 'https://arxiv.org/abs/2410.14310'
pub_type: 'extended_abstract'
venue_short: 'ICRA@40 2024'
pdf: '/assets/paper_files/transferTactileExtAbstract_zaielamri.pdf'
topics: ['BioTac', 'DIGIT', 'Tactile sensors', 'Transfer learning']
header:
  teaser: 'teasers/transferTactileExtAbstract.jpg'
citation: '<b>Wadhah Zai El Amri</b>, Malte Kuhlmann, and Nicolás Navarro-Guerrero (2024). &quot;Transferring Tactile Data Across Sensors.&quot; <i>in 40th Anniversary of the IEEE Conference on Robotics and Automation (ICRA@40), Rotterdam, The Netherlands, Sept. 2024, pp. 1540–1542</i>.'
---

## Abstract

Tactile perception is essential for human interaction with the environment and is becoming increasingly crucial in robotics. Tactile sensors like the BioTac mimic human fingertips and provide detailed interaction data. Despite its utility in applications like slip detection and object identification, this sensor is now deprecated, making many existing datasets obsolete. This article introduces a novel method for translating data between tactile sensors by exploiting sensor deformation information rather than output signals. We demonstrate the approach by translating BioTac signals into the DIGIT sensor. Our framework consists of three Steps: first, converting signal data into corresponding 3D deformation meshes; second, translating these 3D deformation meshes from one sensor to another; and third, generating output images using the converted meshes. Our approach enables the continued use of valuable datasets.

## Citation

{% raw %}
```bibtex
@inproceedings{ZaiElAmri2024Transferring,
  title = {Transferring Tactile Data Across Sensors},
  booktitle = {40th Anniversary of the IEEE Conference on Robotics and Automation (ICRA@40)},
  author = {{Zai El Amri}, Wadhah and Kuhlmann, Malte and {Navarro-Guerrero}, Nicol{\'a}s},
  year = {2024},
  month = sep,
  pages = {1540--1542},
  address = {Rotterdam, The Netherlands},
}
```
{% endraw %}