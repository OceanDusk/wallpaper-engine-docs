# Tips for Advanced Lighting

**BETA FEATURE. This article is only live for testing purposes, this feature has not yet been released.**

By default, light sources you place in the editor will emit a static light. In some cases, it can be useful to introduce movement or a pulsating flickering. In this guide, we introduce a few ways that you can improve your light using [Timeline Animations](/scene/timeline/introduction) and [SceneScript](/scene/scenescript/introduction).

::: danger Please note
This article specifically only concerns itself with image layers with lighting enabled. You should have read and understood the introduction guide before you continue with this article:

* [Real-Time Lighting & Reflections](/scene/lighting/introduction)

Also note that you can also use the [Pulse effect](/scene/effects/effect/pulse) to achieve similar results in some cases without relying on a more complex real-time lighting setup.
:::

This article discusses the following topics:

[[toc]]

## Pulsating Light

One thing you might want to do is to introduce a flickering effect for your light. This can be achieved either using SceneScript or Timeline animations.

### Timeline Pulse Animation

The easiest way you can create a pulsating light effect is to utilize timeline animations. The most simple animation would be something that moves from the starting value to another value and then back to the beginning for a basic pulsating light. If you have not worked with timeline animations already, we would recommend that you read the introductory tutorial on timeline animations first before you continue:

* [Timeline Animation Introduction](/scene/timeline/introduction)

In the case of light, you can either change the **Intensity** or the **Radius** of a light. In our example, we will attach a timeline animation to the **Intensity** property of the light by first selecting the light source and then clicking on the cogwheel icon next to **Intensity**. From there, we select **Bind Timeline Animation** and create a new timeline animation with a duration of 4 seconds.

For our example, we want to mimic a flickering of a fire source. This can be best achieved by having seemingly random changes in intensity. We start the first frame of the timeline animation at an intensity value of exactly **1.00** and then proceed to create upwards and downwards movements with varying intensities from **0.1** to **2.0** every few frames of the animation. It's important that both the first and last frame of the timeline animation have a value of 1 so that the transition is smooth.

Once the animation is done, we move the light source slightly off the visible area of the wallpaper to give the perception of a burning fire being off-screen.

You can see the process and the final result in the following video:

<video width="100%" controls>
  <source src="/videos/pbr_light_timeline.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

### SceneScript-based Pulse Effect

In the timeline animation section above, we have manually created a random flickering of the light through a timeline animation. You can also achieve this programmatically by assigning a SceneScript to the **Intensity** value. Select the light source and then clicking on the cogwheel icon next to **Intensity**. From there, we select **Bind Script**, just make sure you have not bound a timeline animation and a script at the same time to avoid unintended behavior.

After binding the script, you will be presented with an empty `update` function. In our case, we have created a sine curve that fluctuates up and down in a way that it appears similar to the random flickering of fire, just like in our previous example. You can copy and paste our solution or apply your own logic.

```js
'use strict';

/**
 * @param {Number} value - for property 'intensity'
 * @return {Number} - update current property value
 */
export function update(value) {
	return 1 + 0.3 * Math.sin(engine.runtime * 7.33) + 0.2 * Math.sin(engine.runtime * 9.77);
}
```
Since SceneScript gives you absolute freedom in the way you program the logic for the light intensity, you can simplify this or make it even more complex and based on your own ideas. In the next section, we will showcase how to incorporate audio input into the intensity levels of the light source using SceneScript.

## Audio Responsive Light Sources

With SceneScript, you can also make the light sources audio responsive by changing their intensity value depending on the current volume levels of the system audio.

Select the light source and then clicking on the cogwheel icon next to **Intensity**. From there, we select **Bind Script**. Replace the default code with the following code snippet. Further explanations can be found below the snippet.

```js
'use strict';
	
/**
 * Configure these to control smoothing and the frequency.
 */
const FREQUENCY_RESOLUTION = 16; // Must be 16, 32 or 64 per channel.
const SOURCE_FREQUENCY = 0; // 0 means this script listen to bass / beat. 15 = treble frequencies.

const SMOOTHING = 16; // Lower values mean MORE smoothing
const MIN_VALUE = 1; // Lowest light intensity. Set to 0 if light is supposed to turn off when silent
const MAX_VALUE = 2; // Highest light intensity

const VALUE_DELTA = MAX_VALUE - MIN_VALUE;


/**
 * This creates a permanent link to the audio response data.
 */
let audioBuffer = engine.registerAudioBuffers(FREQUENCY_RESOLUTION);
var smoothValue = 0;
var initialValue;

/**
 */
export function update() {
	let audioDelta = audioBuffer.average[SOURCE_FREQUENCY] - smoothValue;
	
	smoothValue += audioDelta * Math.min(1.0, engine.frametime * SMOOTHING);
	smoothValue = Math.min(1.0, smoothValue);

	return (initialValue * (smoothValue * VALUE_DELTA + MIN_VALUE)) / 2;
}

/**
 */
export function init(value) {
	initialValue = value;
}
```

We have placed a few constant variables at the top of the snippet that you can tweak to adjust the behavior to your liking. The main values you should change in most cases are `SMOOTHING`, `MIN_VALUE` and `MAX_VALUE`. 

The `SMOOTHING` rate ensures that the light does not suddenly light up on every beat but rather that the intensity increases and decreases on a smooth curve. You can lower the smoothing value to increase the smoothing, higher values will do the opposite, they will make the light react faster to sounds. Values from 1 - 50 work well.

`MIN_VALUE` and `MAX_VALUE` define the lowest and highest intensity ratings of your light. In our example above, the light will always have an intensity of at least 1, you could change this to 0, for example, if you want the light to turn off completely when no sound is being played.

## Light Movement

Lights can also be moved around the scene dynamically. For most use-cases, we recommend using timeline animations on the **Origin** property. Before you get started with your animations, you should note that unlike most objects in a 2D scene, the Z axis position for lights does matter. You can think of the Z axis position as the *height* of the light above your wallpaper, which is also why Wallpaper Engine provides an easy **Height** slider just below the origin property of lights that controls the Z axis position. The height is relevant as it is taken into account for normal maps, for example. In most cases, you can just rely on the default value, though you may experiment around and see if a different height might work better for your particular use-case.

To get started with our animation, we first select the light source and then click on the cogwheel icon next to **Origin**. From there, we select **Bind Timeline Animation** and create a new timeline animation with a duration of 5 seconds.

For our example, we want to create an overhead flying light that might look like burning catapult fire or similar, though in a different context it may also be a shooting star or some other overhead light. We start by moving the light into its starting position on the right-hand side. We then select the very last frame of our animation and move the light to the left hand-side of the screen. If you press the play button, you should now already see a right-to-left movement of the light, after which it teleports back to the beginning.

Now, we select an timeline keyframe towards the middle of the animation and move the light upwards. If you play the animation now, you should see the light flying upwards and then back down.

### Fading the light in and out

Since the light is reflected even over large distances from our character, we can now see how the light suddenly teleports from left to right. To get around this, we need to add the **Intensity** property of the light to our existing animation. Click on the cogwheel icon next to **Intensity**, select **Bind Timeline Animation** and then add the animation to our existing animation on the **Origin** property.

You should now see **Intensity** in the list of properties of your timeline animation. Right-click on it and select **Show single** so that you can focus just on the **Intensity** property animation. Also be sure to click on the magnifying glass icon on the right-hand side of the animation to re-align the animation graph. Move to the first frame of your animation and lower the intensity to 0. The light will now be completely dark and invisible at the beginning of the animation. Move a few frames forward, then increase the **Intensity**, in our case we set it to a value of 2. We then move towards the end of the animation and create a new keyframe, yet again with a value of 2. This will be the point at which we will start fading out the light again. The final step is to move to the last keyframe of the animation and set the **Intensity** to 0 again so that it matches the intensity of our starting frame.

Essentially, the light will now fade in in the beginning of the animation and it will fade out at the end of the animation, which prevents any noticeable sudden jumps of our light source.

You can see this complete implementation in the following video:

<video width="100%" controls>
  <source src="/videos/pbr_light_movement.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Attaching a Light to the Mouse Cursor

Using **SceneScript**, you can also dynamically attach the light to the mouse cursor position which essentially turns the mouse into a kind of flash light that shines onto the scene.

![Real-time lighting and reflections](/img/pbr/pbr_mouse.gif)

As described in the previous section on light movement, the light has a pre-defined height. Since the mouse cursor is always at a height of 0, we need to make sure to leave the **Z axis** position unchanged. To get started, select the light source you want to attach to the mouse cursor and next to the **Origin** property, click on the cogwheel symbol and select **Bind Script**.

You can copy-paste the following script to replace the default template that is created. The script itself is rather simple, it sets the `x` and `y` position of the light equal to the `x` and `y` position of the mouse cursor position, using `input.cursorWorldPosition`. By purposefully leaving out the `z` value, we ensure the light stays at the pre-defined height:

```js
'use strict';

/**
 * @param {Vec3} value - for property 'origin'
 * @return {Vec3} - update current property value
 */
export function update(value) {
	value.x = input.cursorWorldPosition.x;
	value.y = input.cursorWorldPosition.y;
	return value;
}
```
