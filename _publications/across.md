---
title: "ACROSS: A Deformation-Based Cross-Modal Representation for Robotic Tactile Perception"
collection: publications
permalink: /publication/across
excerpt: 'Topics: BioTac, DIGIT, Tactile sensors, Transfer learning.'
---

Submitted to 2025 IEEE Conference on Robotics and Automation (ICRA 2025)

Authors: Wadhah Zai El Amri, Malte Kuhlmann, Nicolás Navarro-Guerrero.

Topics: BioTac, DIGIT, Tactile sensors, Transfer learning.

# Abstract: 

Tactile perception is essential for human interaction with the environment and is becoming increasingly crucial in robotics. Tactile sensors like the BioTac mimic human fingertips and provide detailed interaction data. Despite its utility in applications like slip detection and object identification, this sensor is now deprecated, making many existing valuable datasets obsolete. However, recreating similar datasets with newer sensor technologies is both tedious and time-consuming. Therefore, it is crucial to adapt these existing datasets for use with new setups and modalities. In response, we introduce ACROSS, a novel framework for translating data between tactile sensors by exploiting sensor deformation information. We demonstrate the approach by translating BioTac signals into the DIGIT sensor. Our framework consists of first converting the input signals into 3D deformation meshes. We then transition from the 3D deformation mesh of one sensor to the mesh of another, and finally convert the generated 3D deformation mesh into the corresponding output space. We demonstrate our approach to the most challenging problem of going from a low-dimensional tactile representation to a high-dimensional one. In particular, we transfer the tactile signals of a BioTac sensor to DIGIT tactile images. Our approach enables the continued use of valuable datasets and the exchange of data between groups with different setups.

<p align="center">
___________________________________________________________________
</p>


# Pipeline:


<p align="center">
  <img src="../images/across/Pipeline.jpg" width="316" height="602" />
</p>

The Figure above describes the steps of our pipeline, which are split into three steps:

### Step 1:

We initially predict the BioTac surface deformation from the BioTac input signals. 

### Step 2:

We convert the BioTac surface mesh deformation to DIGIT surface mesh deformation since the physical interaction of both sensors can be modeled by a mesh deformation independently of sensor output modality. 

### Step III: 

We generate the DIGIT sensor image from the converted deformation.

The pipeline delivers results similar to the image below (Further results from the test set can be checked in the video below):
<p align="center">
  <img src="../images/across/figure_results_all_data.jpg" width="550" height="550" />
</p>

<p align="center">
___________________________________________________________________
</p>

## Demonstration Video:

The following video demonstrates the pipeline in action, showing the BioTac sensor's outputs (signals) and the correspponding generated DIGIT sensor images.

<!--p align="center">
  <img src="../images/across/output_all_data_smaller_new.gif" width="960" height="320" />
</p!-->

<p align="center">
<video width="960" height="320" controls>
  <source src="../videos/output_all_data_smaller_new.mp4" type="video/mp4">
</video>
</p>


<p align="center">
___________________________________________________________________
</p>


## Preprint: 

Our paper preprint will be published soon on arXiv.

[<img src="../images/ArXiv_logo.png" width="50" height="50">]()


## Code: 

Our code will be published soon. Providing all necessary checkpoints and a detailled installion guide. 

[<img src="../images/GitHub-Mark.png" width="50" height="50">]()

## Dataset:

Our dataset will be published soon. It contains over 155K unique 3D mesh deformation pairs from interactions involving BioTac and DIGIT sensors, including various types of indenters, the force exerted on each sensor, and rendered images of the scenes. 

[<img src="../images/drive_logo.jpg" width="50" height="50">]()
