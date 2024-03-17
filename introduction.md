# RGB硬件支持

RGB硬件支持 Wallpaper Engine允许你通过其API控制兼容的RGB设备，并将你的壁纸与LED硬件同步。即使你没有任何兼容硬件，或者只拥有有限数量的兼容设备，也可以简单地使用模拟器。Corsair的iCUE软件和Razer都提供了模拟非自有设备的方法。

默认情况下，Wallpaper Engine会将壁纸的颜色镜像到任何兼容的设备上。但你也可以配置一个单独的图层来负责所有照明效果。

<video width="100%" controls loop autoplay>
  <source :src="$withBase('/videos/rgb_emulator.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

## **硬件模拟器设置（可选）**

如果你想利用RGB硬件模拟器来测试你的RGB灯光在多种设备上的显示效果，我们推荐使用Razer Chroma模拟器。

首先确保安装了最新版本的Razer Synapse 3，并在Razer Synapse设置中安装Chroma Connect组件：

* 下载Razer Synapse 3 [Download Razer Synapse 3](https://www.razer.com/synapse-3)

之后，访问Razer开发者门户并安装Razer Chroma模拟器的最新版本（滚动页面获取链接）：

* Razer开发者门户 [Razer Developer Portal](https://developer.razer.com/works-with-chroma/download/)

安装完Razer Synapse 3和最新的Razer Emulator后，重启Wallpaper Engine，并确保在应用程序设置中启用了LED插件。通过使用随Wallpaper Engine一起提供的标准壁纸（如“**Razer Bedroom**”）来验证模拟器是否正常工作。

## **配置RGB照明图层**

如果你想要全面掌控壁纸的照明效果，可以在兼容的图层上启用“**Limit iCUE & Chroma to this layer**”选项。大多数情况下，这将是一个图像图层，但也可以为此目的使用特殊的图层类型，例如**纯色图层**和**合成图层**。

带有此选项的图层不需要直接可见，可以位于其他图层之下，但它们必须处于壁纸的可视区域内。因此，请确保这些额外图层位于壁纸的中心位置，并尽可能缩小尺寸，以确保在用户可能使用的各种分辨率和宽高比下都能完全渲染出来。仅用于LED照明目的而设置的不必要的大尺寸图层也会无谓地增加视频内存占用，所以尽量保持图层尺寸最小化。

使用非常小分辨率的**纯色图层**（例如32 x 32像素是有效减少视频内存使用的好方法），并且可以很好地与脉冲效果[Pulse effect](/wallpaper-engine-docs/scene/effects/effect/pulse) 或色彩渲染效果[Tint effect](/wallpaper-engine-docs/scene/effects/effect/tint)结合使用。

### **关于合成图层的额外说明**

对于**合成图层**而言，位于其下的所有图层都会被映射到RGB硬件上，它们本质上就像拍摄场景的一部分的相机。如果你选择采用这种**方式**，请务必使合成图层尽可能小，并为该图层选择尽可能低且必要的分辨率，以便降低系统负载。

::: tip
如果在多个图层上都启用了“**Limit iCUE & Chroma to this layer**”选项，则该选项只会对最顶层的图层生效。为了避免混淆，请确保仅在一个图层上使用此选项。
:::