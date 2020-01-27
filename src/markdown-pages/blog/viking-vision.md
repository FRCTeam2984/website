---
title: Viking Vision
date: 2017-11-25 14:00:00
updated: 2017-11-26 10:00:00
author: Max Apodaca
path: /blog/viking-vision
---

![Viking Vision Displaing targets](/images/20171125/VisionAppRunning.JPG)

In the pre-season we have been working on adapting the [Cheesy Poofs'](https://www.team254.com/) [vision tracking app](https://github.com/Team254/FRC-2017-Public/tree/master/vision_app). We have decided to use a phone to do the vision tracking next year as it offloads the processing from the roboRIO, provides an all in one vision solution, and is easier to debug.

Development Environment
===

Setting up the development environment was fairly straight forward. However, I experienced difficulties with the OpenCV libraries that the app requires. Make sure to follow the README located in the root of the project. This has instructions on how to install OpenCV to android. In addition, Android Studio does not show the C++ source file that does the vision processing. As a result I had to use an external text editor to edit this file.

How The Tracker Works
===

The tracker works by finding the two vision targets in the image and then using trigonometry to find their position in 3D space.

![Full color image of the vision target](/images/20171125/target.png)

The first step in tracking is to find the two targets in an image. This is done by isolating a specific color range in the image. In this case we are using the [Hue Saturation Value (HSV)](https://en.wikipedia.org/wiki/HSL_and_HSV) color representation. These values need to be tuned which can be done in the app by holding the lock icon and then selecting the wrench icon. In the image below the white is in the HSV range while the black is outside. The Image to the left is not yet tuned while the right one is.

![HSV slection process](/images/20171125/HSVSelection.png)

After isolating the targets a contour detector is run over the image. The contour detector finds any contiguous white areas. These contours are then filtered based on their size and shape. Then the algorithm checks to make sure there is a fitting other contour, meaning the second of the two pieces of retro-reflective tape. After all of this is done the position of the vision target can be calculated. The process is outlined in [this OpenCV guide](https://docs.opencv.org/2.4/modules/calib3d/doc/camera_calibration_and_3d_reconstruction.html) however I find this convoluted and too complex.

![A Diagram of the distance calculation](/images/20171125/cameraDistance.svg)

 The image above is a side view of camera and vision target. We know h as that is how tall the vision target is in real life (5 inches) and we want to find d. We can use the tangent function to solve for d which yields **d&nbsp;=&nbsp;h&nbsp;/&nbsp;tan&nbsp;(θ)**. To find θ we can use the field of view (FOV) of the camera. A measurement usually found in the camera's specification or that can be computed. We then can compute θ with the formula **θ&nbsp;=&nbsp;T<sub>h</sub>&nbsp;/&nbsp;C<sub>h</sub>&nbsp;*&nbsp;C<sub>vFOV</sub>&nbsp;** where T<sub>h</sub> is the target's height in pixels, C<sub>h</sub> is the image's hight in pixels, and C<sub>vFOV</sub> is the vertical FOV of the camera.

 ![A Diagram of the angle calculation](/images/20171125/cameraRotation.svg)

 To find the rotation of the target about the camera a similar method can be used. We can draw a triangle as depicted above to calculate θ. This time we know the camera's horizontal FOV as well as the number of pixels that the target is from the center of the image. This lets us derive the equation **θ&nbsp;=&nbsp;(2T<sub>x</sub>-C<sub>w</sub>)&nbsp;/&nbsp;C<sub>w</sub>&nbsp;*&nbsp;C<sub>hFOV</sub>/2** where T<sub>x</sub> is the target's x position, C<sub>w</sub> is the image's width in pixels, and C<sub>hFOV</sub> is the camera's horizontal FOV.

FOV Calculation
path: /blog/viking-vision
---

![FOV Calculation](/images/20171125/cameraFOV.svg)

To calculate the FOV of a camera place two objects at the edges of the image. The measure the real world distance between the two and the perpendicular distance to the camera. This is illustrated in the figure above. Then we know w and d and need to solve for θ. This can be done by using the equation **θ&nbsp;=&nbsp;tan<sup>-1</sup>(&nbsp;(&nbsp;0.5&nbsp;*&nbsp;w&nbsp;)&nbsp;/&nbsp;d&nbsp;)**.

Conclusion
===

 That is all that is necessary for the app to calculate the position of the target. After calculating the position the app sends the target's position to the roboRIO via the [Android Debug Bridge (ADB)](https://developer.android.com/studio/command-line/adb.html). The source code for the app can be found in the [Git Repository](https://github.com/FRCTeam2984/VikingVision).
