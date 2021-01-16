# Combo Box User Property

A combo box property will display multiple options that you can choose from in the wallpaper browser. The user of the wallpaper will be able to pick one of them and the wallpaper will show the layers that you have associated with the respective option.

This example will show you how to make it possible for users to hide and show different weather effects on the wallpaper. We will have three weather options, rain, snow and fog. Only one type of weather effect will be visible depending on the choice of the user. We're starting with a basic background image and have added the three weather effects simply from the stock particles that come with the editor.

# Create Combo Box

We'll start with selecting the first layer we want to add to the new combo box. Click on the layer you want to be able to toggle and then the cog wheel at the very top right. Click on **Bind User Property** and then **Add Property**:

<video width="100%" controls loop autoplay>
  <source src="/videos/property_combo_bind_property.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

Now choose the property type **Combo** from the menu. Rename the property to something sensible, like ***Weather*** in our case. Add the three options we want to be able to choose from, ***Snow***, ***Rain*** and ***Fog***. You also need to enter a unique value for them, we'll use 0, 1 and 2 respectively in this case:

<video width="100%" controls loop autoplay>
  <source src="/videos/property_combo_create.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

You can now close both dialogs. The first option, ***Snow*** will be selected by default, and the layer that was currently selected will now be associated with the default ***Snow*** option.

# Associate Other Layers

Now select the next layer, ***Rain***, and start binding a user property like before. This time we will choose the existing ***Weather*** property and then choose ***Rain*** from the drop down menu. This will associate the ***Rain*** layer with the correct option. The rain effect will disappear as soon as you close the dialog since the default option is ***Snow***:

<video width="100%" controls loop autoplay>
  <source src="/videos/property_combo_link_rain.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

Repeat the same with the ***Fog*** layer:

<video width="100%" controls loop autoplay>
  <source src="/videos/property_combo_link_fog.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

# Check Wallpaper Browser

All done! You can now test the wallpaper by applying it to your desktop and you will see the new custom option ***Weather*** in the right menu and be able to choose between snow, rain and fog effects.

<video width="100%" controls loop autoplay>
  <source src="/videos/property_combo_finished.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
