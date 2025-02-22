---
prev: ../introduction.md
---

# 粒子系统 - 常规

粒子系统的**常规**组件定义了粒子在屏幕上的渲染方式以及使用哪种纹理。它由三个部分组成：

[[toc]]

## 材质设置

### 折射

启用后，你可以添加一个额外的法线贴图，Wallpaper Engine 使用该贴图为粒子添加折射效果。

此折射粒子保持在原位，并使用 **粒子运算符大小更改** 和 **粒子运算符 Alpha 淡入淡出** 进行动画处理。使用反照率纹理的白色图像将材质设置为半透明混合。

### 纹理

#### 反照率

粒子系统使用的主纹理。你还可以导入精灵图以创建动画纹理或生成具有单个纹理的粒子。如果你想了解更多关于如何使用精灵图的信息，请务必阅读我们的 [粒子系统精灵图教程](/wallpaper-engine-docs/scene/particles/tutorial/spritesheet) 。

#### 法线贴图纹理（编辑器里名为“标准”）

**可选项**，这一项仅在启用 **反射** 后可见，你可以在此处导入法线贴图，Wallpaper Engine 将使用该贴图来产生折射效果。

### 着色器

#### 过亮

允许你调整粒子系统的亮度。如果你打算提高亮度，请尝试启用[高光效果](/wallpaper-engine-docs/scene/effects/bloom)，尤其是 **HDR高光** 可以获得比增加**过亮**值更高质量的效果。

#### 折射数量

**可选项**，这一项仅在启用 **折射** 后可见，控制折射效果的强度。

### 渲染

#### 混合

根据你的粒子系统所容纳的内容类型，选择正确的混合模式非常重要。你可以在 **附加**、**半透明** 和 **标准** 中进行选择。

::: details 单击此处比较三种混合模式

<video width="100%" controls loop>
  <source :src="$withBase('/videos/particle_system_blending.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

:::

## 系统

### 最大计数

控制允许生成的最大粒子数。这直接控制粒子分配的内存量。保持此值为粒子系统运行所需的较低值，可以大大提高性能并减少内存使用。

### 开始时间

在创建粒子系统时，将对粒子系统进行一定时间的预模拟。这有助于避免出现空白时间，它会在启动粒子系统时，看起来就像是已经运行了一段时间一样。这个数字越高，模拟所需的时间就越长，因为它是实时模拟的。

### 世界空间

如果启用此功能，粒子在创建后将忽略粒子系统的位置、缩放和旋转。如果你想将一个粒子附加到另一个粒子或其他东西上，该项会很有用 —— 生成的粒子不会与创建它们的对象一起移动。

## 视口

**视口设置只会影响粒子系统编辑器中的预览。**

### 显示统计信息

右上角显示粒子数。可用于确定粒子系统 **系统** 中 **最大计数** 设置的上限。

### 显示坐标轴

在预览屏幕中渲染水平线和垂直线，方便查看粒子预览。

### 颜色

允许你更改预览屏幕的颜色以在不同背景上测试你的粒子。