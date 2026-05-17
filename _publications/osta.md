---
title: "Open Set Task Augmentation Facilitates Generalization of Deep Neural Networks Trained on Small Data Sets"
collection: publications
permalink: /publication/osta
excerpt: 'Topics: Machine Learning, Deep Learning, Image Processing.'
date: 2022-04-01
venue: 'Neural Computing and Applications, 34, 6067–6083'
paperurl: 'https://link.springer.com/article/10.1007/s00521-021-06753-6'
pub_type: 'full_paper'
citation: '<b>Wadhah Zai El Amri</b>, Felix Reinhart, Wolfram Schenck (2022). &quot;Open Set Task Augmentation Facilitates Generalization of Deep Neural Networks Trained on Small Data Sets.&quot; <i>Neural Computing and Applications, 34, 6067–6083</i>.'
---
Accepted to Springer Neural Computing and Applications Journal

Authors: Wadhah Zai El Amri, Felix Reinhart, Wolfram Schenck .

Topics: Machine Learning, Deep Learning, Image Processing.


# Abstract: 
Many application scenarios for image recognition require learning of deep networks from small sample sizes in the order of a few hundred samples per class. Then, avoiding overfitting is critical. Common techniques to address overfitting are transfer learning, reduction of model complexity and artificial enrichment of the available data by, e.g., data augmentation. A key idea proposed in this paper is to incorporate additional samples into the training that do not belong to the classes of the target task. This can be accomplished by formulating the original classification task as an open set classification task. While the original closed set classification task is not altered at inference time, the recast as open set classification task enables the inclusion of additional data during training. Hence, the original closed set classification task is augmented with an open set task during training. We therefore call the proposed approach open set task augmentation. In order to integrate additional task-unrelated samples into the training, we employ the entropic open set loss originally proposed for open set classification tasks and also show that similar results can be obtained with a modified sum of squared errors loss function. Learning with the proposed approach benefits from the integration of additional “unknown” samples, which are often available, e.g., from open data sets, and can then be easily integrated into the learning process. We show that this open set task augmentation can improve model performance even when these additional samples are rather few or far from the domain of the target task. The proposed approach is demonstrated on two exemplary scenarios based on subsets of the ImageNet and Food-101 data sets as well as with several network architectures and two loss functions. We further shed light on the impact of the entropic open set loss on the internal representations formed by the networks. Open set task augmentation is particularly valuable when no additional data from the target classes are available—a scenario often faced in practice.

<p align="center">
___________________________________________________________________
</p>

## Preprint:

[Download paper here](http://wzaielamri.github.io/assets/paper_files/osta_zaielamri.pdf)


## Citation

```bibtex
@article{ZaiElAmri2021OSTA,
  author  = {{Zai El Amri}, {Wadhah} and Reinhart, Felix and Schenck, Wolfram},
  title   = {Open set task augmentation facilitates generalization of deep neural networks trained on small data sets},
  journal = {Neural Computing and Applications},
  year    = {2022},
  volume  = {34},
  pages   = {6067--6083},
  doi     = {10.1007/s00521-021-06753-6}
}
```