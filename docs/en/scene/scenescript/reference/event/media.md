---
prev: ../../reference.md
---

# SceneScript Media Integration Events

SceneScript offers multiple media integration events that allow you to access information about currently playing music or videos on the system. This will only be available for media players that integrate with the global Windows media system. Some media players require this feature to be turned on first.

::: danger Please note
The available data points can greatly differ between applications. Do not build your wallpaper in a way that it would break without certain data points not being available.
:::

[[toc]]

## mediaStatusChanged

This event function will be called when the media integration is turned on or off by the user in the app settings. The event parameter is a [MediaStatusEvent](/en/scene/scenescript/reference/class/MediaStatusEvent.md). You can utilize this to adapt your wallpaper for users who choose not to use this feature at all.

```js
export function mediaStatusChanged(event: MediaStatusEvent) {

}
```

## mediaPlaybackChanged

This event function will be called when the users starts, stops or pauses media playback. The event parameter is a [MediaPlaybackEvent](/en/scene/scenescript/reference/class/MediaPlaybackEvent.md). You can use the class constants to check for the appropriate state. For example: `event.state == MediaPlaybackEvent.PLAYBACK_PLAYING`, see the `MediaPlaybackEvent` class for more information.

```js
export function mediaPlaybackChanged(event: MediaPlaybackEvent) {

}
```

## mediaPropertiesChanged

This event function will be called when the properties of the currently playing media change. It contains text information such as the song title, artist name, album name and more. All information are supplied by the [MediaPropertiesEvent](/en/scene/scenescript/reference/class/MediaPropertiesEvent.md) parameter.

```js
export function mediaPropertiesChanged(event: MediaPropertiesEvent) {

}
```

## mediaThumbnailChanged

This event function will be called when the thumbnail of the currently playing media changes. The event parameter is a [MediaThumbnailEvent](/en/scene/scenescript/reference/class/MediaThumbnailEvent.md) and also contains additional information, such as primary, secondary and tertiary colors used in the album art which you can utilize in your wallpaper.

```js
export function mediaThumbnailChanged(event: MediaThumbnailEvent) {

}
```

## mediaTimelineChanged

This event function will be called when the current time of the playing media changes. The event parameter is a [MediaTimelineEvent](/scene/scenescript/reference/class/MediaTimelineEvent). **Please note:** Not all media players support this feature, make sure your wallpaper also works fine when this function is never called.

```js
export function mediaTimelineChanged(event: MediaTimelineEvent) {

}
```