---
title: "Interlude: Optimization of a Simple Power Cube Intake"
subtitle: This mechanism is the star of the show, so it's important to get it right.
date: 2018-02-03 00:00:00
updated: 2018-02-03 00:00:00
author: Rich Apodaca
path: /blog/interlude-intake-optimization
---

The team has spent some time optimizing a simple intake built from three 2x2 wood sections, two AndyMark Redline motors mounted to 20:1 57 Sport gearboxes, and two four-inch compliant wheels (Green 35A durometer or Blue 50A durometer).

![Design of Intake](/images/20180203/design-of-intake.png)

Five main parameters were adjusted:

- **Back Width.** Controls the space between the intake wheels and intake width.
- **Arm Length.** Determines the length of the channel and ability of the cube to straighten when edge-fed.
- **Wheel Type.** Applies friction early in intake process, and compresses the cube after accepted.
- **Height of Intake Wheels.** Should be as high as possible to allow easy over-the-back delivery of cube to scale.
- **Wheel Rotational Speed.** Slower speeds might lead to more controlled intake, but this parameter wasn't varied much.

The study consisted of mounting the intake to the front of an AndyMark COTS chassis. The top of the intake wheels was about 6 inches from the ground. Full power was applied to the intake motors and the chassis was driven forward. Both chassis and cube (with cover) were placed on a well-worn carpet. Three feeding situations were used: face; edge, and tilted (between face and edge). Scores are reported as the fraction of five intakes that completed face-on.

| Trial | Back Width | Arm Length | Gap     | Orientation | Score | Wheels | Notes      |
|-------|------------|------------|---------|-------------|-------|--------|------------|
| 1     | 19 1/2     | 8          | 16 9/16 | Face        | 3/5   | Green |            |
| 2     | 19 1/2     | 8          | 16 9/16 | Edge        | 3/5   | Green |           |
| 3     | 19 1/2     | 8          | 16 9/16 | Tilted      | 2/5   | Green |            |
| 4     | 19 1/2     | 8 1/2      | 16 7/16 | Face        | 4/5   | Green |           |
| 5     | 19 1/2     | 8 1/2      | 16 7/16 | Edge        | 4/5   | Green |            |
| 6     | 19 1/2     | 8 1/2      | 16 7/16 | Tilted      | 4/5   | Green |            |
| 7     | 19 1/2     | 9 1/2      | 16 9/16 | Face        | 5/5   | Green |            |
| 8     | 19 1/2     | 9 1/2      | 16 9/16 | Vertex      | 5/5   | Green | Cracking sound on second trial |
| 9     | 19 1/2     | 9 1/2      | 16 9/16 | Tilted      | 5/5   | Green |           |
| 10    | 20         | 9 1/2      | 17 1/4  | Face        | 5/5   | Green |           |
| 11    | 20         | 9 1/2      | 17 1/4  | Edge        | 4/5   | Green | Bent       |
| 12    | 20         | 9 1/2      | 17 1/4  | Tilted      | 5/5   | Green |           |
| 13    | 20 1/2     | 9 1/2      | 7 9/16  | Face        | 5/5   | Green |           |
| 14    | 20 1/2     | 9 1/2      | 7 9/16  | Edge        | 3/5   | Green |           |
| 15    | 20 1/2     | 9 1/2      | 7 9/16  | Tilted      | 5/5   | Green |           |
| 16    | 20 1/2     | 9 1/2      | 7 9/16  | Face        | 5/5   | Blue | |
| 17    | 20 1/2     | 9 1/2      | 7 9/16  | Edge        | 4/5   | Blue | |
| 18    | 20 1/2     | 9 1/2      | 7 9/16  | Tilted      | 5/5   | Blue | |
| 19    | 20 1/2     | 9 1/2      | 7 9/16  | Face        | 5/5   | Blue | 50% power |
| 20    | 20 1/2     | 9 1/2      | 7 9/16  | Edge        | 5/5   | Blue | 50% power |
| 21    | 20 1/2     | 9 1/2      | 7 9/16  | Tilted      | 5/5   | Blue | 50% power |
| 22    | 20 1/2     | 9 1/2      | 7 9/16  | Face        | 5/5   | Blue | top of wheels flush with top of cube |
| 23    | 20 1/2     | 9 1/2      | 7 9/16  | Edge        | 1/5   | Blue | top of wheels flush with top of cube, cube tilted forward on failures |
| 24    | 20 1/2     | 9 1/2      | 7 9/16  | Face        | 4/5   | Blue | top of wheels 3 inches from top of cube, can't eject |
| 25    | 20 1/2     | 9 1/2      | 7 9/16  | Edge        | 2/5   | Blue | top of wheels 3 inches from top of cube, can't eject |

Best results were obtained with a 20 1/2 inch base and 9 1/2 inch arms. Blue or green wheels performed equivalently.

Narrow intakes were more prone to damage by edge-fed cubes. This is understandable given that the edge-fed configuration is about two inches wider than the face-fed configuration.

Intakes mounted with the top of wheels against the top of the cube misfed in edge-feed situations. The cube tilted forward, rather than being drawn in parallel to the ground.

Intakes mounted with wheels three inches from the top of the cube could ingest, but not eject a cube. Intake wheels lost traction after becoming lodged within the cutout forming the handle of the milk crate. As a result, any intake system based on this design must be mounted with the top of the intake wheels no higher than 7 1/2 inches from the ground.
