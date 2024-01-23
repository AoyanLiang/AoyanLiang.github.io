---
title: "Activation Relaxation Technique"
excerpt: "A computational method to unravel material energy landscapes"
image: "/images/ART.png"
collection: portfolio
date: 2024-01-22
---

The Activation Relaxation Technique (ART) stands as a pivotal computational method in materials science for examining energy landscapes and activation energies in various systems. This technique is integral in simulations that require a deep understanding of material behavior under diverse conditions.

**Energy Landscape:** This concept represents all potential states of a system and their associated energies. ART aids in visualizing potential movements or rearrangements of atoms or molecules in a material, highlighting the energy barriers they encounter during state transitions.

**Activation Energy:** Essential in ART, this is the energy necessary for atoms or molecules to overcome energy landscape barriers, transitioning from one state to another.

<figure>
  <img src="/images/ART.png" alt="ART">
  <figcaption>Illustration of the ART process</figcaption>
</figure>

**ART Process:**
1. **Initial Minimization:** Begins with the system in a stable state or a local energy minimum.
2. **Random Perturbation:** Slightly perturbs this state to create a new configuration.
3. **Saddle Point Identification:** Employs the Lanczos algorithm to locate the nearest saddle point, a crucial transition state in the energy landscape.
4. **Relaxation:** The system then progresses to the nearest local minimum, modeling natural movement towards lower energy states.

In essence, ART serves as a key tool in simulating and interpreting the intricate behaviors of materials at an atomic level, offering insights into their evolving properties.

Related work: our published paper in *Physical Review Materials*: [Effect of heat treatment paths on the aging and rejuvenation of metallic glasses](https://doi.org/10.1103/PhysRevMaterials.7.123603)