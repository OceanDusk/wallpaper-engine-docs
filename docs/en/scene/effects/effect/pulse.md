---
prev: ../overview.md
---
# Pulse Effect

The **Pulse** effect can is useful for animating any type of lighting. It can either pulsate a light in set intervals or react to any audio being played on the system.

![Pulse](/img/effects/Pulse.gif)

### Effect Settings

The effect has two different modes, a standard one and an audio response mode. The following settings are shared across both modes:

* **Opacity mask:** A paintable mask to determine which area of the image is affected. By default the entire image will pulse, so in most cases you want to paint the opacity mask to limit the effect of the pulse to certain areas of the image (mainly areas you want to light up).
* **Blend mode:** How the pulse color is blended with the background image.
* **Pulse alpha:** Make the pulse animation affect the opacity of the image.
* **Pulse color:** Make the pulse animation affect the color of the image.
* **Tint high:** Color applied to the bright state of the pulse when the **Pulse color** setting is enabled.
* **Tint low:** Color applied to the dark state of the pulse when the **Pulse color** setting is enabled.

#### Default Mode
When the option **Audio response** at the top of the effect settings is set to **None**, the pulse effect will pulsate light in a regular interval. The following settings are available:

* **Noise amount:** How much you want the animation to flicker.
* **Noise speed:** How fast it should flicker.
* **Power:** Exponent for the pulse animation.
* **Pulse amount:** A multiplier for the pulse output value.
* **Pulse bounds:** This maps how much time the pulse is bright and dark. For example, set to 0.8, 1 for a short pulse.
* **Pulse phase:** The time offset of this effect.
* **Pulse speed:** The speed of the pulse animation.

#### Audio response mode

By changing the **Audio response** option from **None** to any other option will cause the pulse effect to react to audio playing on the computer. In most cases, you want to set this value to **Center**, this will cause the pulse to appear for audio played on both the left or right audio channel. When set to **Left** or **Right**, the effect will only listen to either the left or right audio channel, which can be useful if you want to only light up an element when audio is played on a specific side.

* **Audio amount:** The strength of the pulse effect in relation to the audio levels being played.
* **Audio bounds:** TODO ASK KRIS
* **Audio exponent:** TODO ASK KRIS
* **Frequency max:** The **highest** audio frequency that the effect reacts to. The values go from 0 to 15, where 0 is bass sounds and 15 higher frequency treble sounds. For example, set this to 1 if you want the pulse effect to only react to the beat of music being played (as the beat is usually reflected by lower bass frequencies).
* **Frequency min:** The **lowest** audio frequency that the effect reacts to. The values go from 0 to 15, where 0 is bass sounds and 15 higher frequency treble sounds. For example, set this to 0 if you want the pulse effect to only react to the beat of music being played (as the beat is usually reflected by lower bass frequencies).
