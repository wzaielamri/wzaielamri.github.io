---
title: "Transfer Learning with Jukebox for Music Source Separation"
collection: publications
permalink: /publication/unmix
excerpt: 'Topics: Machine Learning, Deep Learning, Audio Signal Processing, Transfer Learning.'
date: 2022-06-10
venue: 'Part of the IFIP Advances in Information and Communication Technology book series (IFIPAICT,volume 647)'
paperurl: 'https://link.springer.com/chapter/10.1007/978-3-031-08337-2_35'
pub_type: 'full_paper'
venue_short: 'IFIP AICT 2022'
code: 'https://github.com/wzaielamri/unmix'
pdf: '/assets/paper_files/unmix_zaielamri.pdf'
topics: ['Machine Learning', 'Deep Learning', 'Audio Signal Processing', 'Transfer Learning']
header:
  teaser: 'teasers/unmix.jpg'
citation: '<b>Wadhah Zai El Amri</b>, Oliver Tautz, Helge Ritter, Andrew Melnik (2022). &quot;Transfer Learning with Jukebox for Music Source Separation.&quot; <i>Part of the IFIP Advances in Information and Communication Technology book series (IFIPAICT,volume 647)</i>.'
---

## Abstract

In this work, we demonstrate how a publicly available, pretrained Jukebox model can be adapted for the problem of audio source separation from a single mixed audio channel. Our neural network architecture, which is using transfer learning, is quick to train and the results demonstrate performance comparable to other state-of-the-art approaches that require a lot more compute resources, training data, and time. We provide an open-source code implementation of our architecture (https://github.com/wzaielamri/unmix)

## Resources

<ul class="resources">
  <li><a href="https://github.com/wzaielamri/unmix"><i class="fab fa-github" aria-hidden="true"></i> Code</a> Our code is published online, along with all necessary checkpoints and a detailed installation guide.</li>
</ul>

## Citation

{% raw %}
```bibtex
@InProceedings{zai2022unmix,
author="{Zai El Amri}, Wadhah
and Tautz, Oliver
and Ritter, Helge
and Melnik, Andrew",
title="Transfer Learning with Jukebox for Music Source Separation",
booktitle="Artificial Intelligence Applications and Innovations",
year="2022",
publisher="Springer International Publishing",
pages="426--433",
isbn="978-3-031-08337-2"
}
```
{% endraw %}