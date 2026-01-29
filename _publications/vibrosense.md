---
title: "Vibro-Sense: Robust Vibration-based Impulse Response Localization and Trajectory Tracking for Robotic Hands"
collection: publications
permalink: /publication/vibrosense
excerpt: 'Topics: Tactile Sensing, Vibro-Acoustic Sensing, Contact Localization, Deep Learning.'
date: 2026-01-25
venue: 'Submitted to Springer Autonomous Robots'
paperurl: 'https://arxiv.org/abs/2601.20555'
citation: '<b>Wadhah Zai El Amri</b>, Nicolás Navarro-Guerrero (2026). &quot;Vibro-Sense: Robust Vibration-based Impulse Response Localization and Trajectory Tracking for Robotic Hands.&quot; <i>2026 Submitted to Springer Autonomous Robots, 2026</i>.'
---

Submitted to Springer Autonomous Robots Journal

Authors: Wadhah Zai El Amri, Nicolás Navarro-Guerrero.

Topics: Tactile Sensing, Vibro-Acoustic Sensing, Contact Localization, Deep Learning.

# Abstract: 

Rich contact perception is crucial for robotic manipulation, yet traditional tactile skins remain expensive and complex to integrate. This paper presents a scalable alternative: high-accuracy whole-body touch localization via vibro-acoustic sensing. By equipping a robotic hand with seven low-cost piezoelectric microphones and leveraging an Audio Spectrogram Transformer, we decode the vibrational signatures generated during physical interaction. Extensive evaluation across stationary and dynamic tasks reveals a localization error of under 5 mm in static conditions. Furthermore, our analysis highlights the distinct influence of material properties: stiff materials (e.g., metal) excel in impulse response localization due to sharp, high-bandwidth responses, whereas textured materials (e.g., wood) provide superior friction-based features for trajectory tracking. The system demonstrates robustness to the robot's own motion, maintaining effective tracking even during active operation. Our primary contribution is demonstrating that complex physical contact dynamics can be effectively decoded from simple vibrational signals, offering a viable pathway to widespread, affordable contact perception in robotics. To accelerate research, we provide our full datasets, models, and experimental setups as open-source resources.

<p align="center">
___________________________________________________________________
</p>

## Experimental Setup:

The following image illustrates our experimental setup, showcasing the robotic hand equipped with piezoelectric microphones used for the first task (impulse response localization):

<p align="center">
    <img src="../images/vibrosense/experiment_setup.jpeg" width="960" height="320">
</p>


<p align="center">
___________________________________________________________________
</p>


## Demonstration Video:

The following video demonstrates the pipeline in action, showing the data collection procedure for the second task (trajectory tracking):

<p align="center">
  <a href="../images/vibrosense/video.mp4">
    <img src="../images/vibrosense/video.gif" alt="Watch the full video" width="960" height="320">
  </a>
</p>


<p align="center">
___________________________________________________________________
</p>


## Preprint: 

Our paper preprint is published on arXiv.

[<img src="../images/ArXiv_logo.png" width="50" height="50">](https://arxiv.org/abs/2601.20555)

[Download paper here](http://wzaielamri.github.io/files/vibrosense_zaielamri.pdf)

## Code: 

Our code will be published soon, along with all necessary checkpoints and a detailed installation guide.

[<img src="../images/GitHub-Mark.png" width="50" height="50">](https://github.com/wzaielamri/vibrosense)

## Dataset:

Our dataset will be available soon upon request.

[<img src="../images/hf-logo.png" width="50" height="50">](https://huggingface.co/datasets/wzaielamri/vibrosense)

## Citation

```bibtex
@InProceedings{ZaiElAmri2026VibroSense,
  author = {Zai El Amri, Wadhah and {Navarro-Guerrero}, Nicol{\'a}s},
  title = {"Vibro-Sense: Robust Vibration-based Impulse Response Localization and Trajectory Tracking for Robotic Hands"},
  booktitle = {"ArXiv Preprint arXiv:2601.20555, Submitted to Autonomous Robots Springer Journal"},
  year={2026},
}
```