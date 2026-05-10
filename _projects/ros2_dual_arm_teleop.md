---
title: "ROS 2 Dual Arm Teleoperation"
excerpt: "<span style='background:#e8f0fe;color:#1a73e8;border-radius:4px;padding:2px 8px;font-size:0.8em;font-weight:600;margin-right:6px;'>Side Project</span> Markerless real-time teleoperation of dual UR5e robotic arms using a standard webcam and MediaPipe hand tracking. Built for fun with ROS 2 Humble, MoveIt, and MoveIt Servo.<br/>"
collection: projects
---

A ROS 2 Humble workspace for markerless, real-time teleoperation of dual 6-DOF robotic arms (UR5e) equipped with Robotiq 2F-85 grippers, controlled entirely via a standard webcam and RViz. Built just for fun.

<p align="center"><img src="/assets/images/projects/ros2_dual_arm_teleop/demo.gif" alt="ROS 2 Dual Arm Teleop Demo" width="600"/></p>


**GitHub:** [wzaielamri/ros2_dual_arm_teleop](https://github.com/wzaielamri/ros2_dual_arm_teleop)

## What it does

- Tracks both hands from a webcam using **MediaPipe Hand Landmarker**
- Left hand → left arm, right hand → right arm
- 2D planar movement (X/Y) + yaw rotation from hand orientation
- Gripper open/close via **thumb–index pinch gesture**
- Simulated entirely in **RViz** with mock hardware interfaces (no real robot needed)

## Stack

- **ROS 2 Humble**: system
- **MoveIt + MoveIt Servo**: motion planning and real-time Cartesian control
- **MediaPipe**: camera-based hand landmark detection
- **OpenCV**: video capture and GUI overlay
- **ros2_control**: joint trajectory and forward command controllers

## Noise handling

- Exponential moving average (EMA) smoothing
- Deadband filtering to suppress jitter at rest
- Max-delta clamping to reject outlier jumps
- Butterworth low-pass filter in MoveIt Servo
