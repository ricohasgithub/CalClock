# CalClock
## Customizable personal Fitbit watchface

If you want to create your own custom Fitbit watchface (with a custom background), edit /resources/index.gui.

Change image source (href, linked to image in the assets folder) 

```
<!-- Background image -->
<image x="0" y="0" width="300" height="300" href = "assets/BigSur.jpg" />
```

## Errors encountered while developing
 - If you get ``` Error 12: Critical Glue Error ```, this means that the graphics rendering engine of the Fitbit cannot handle the resolution of your image. Try de-resoluting your image by compressing it or bluring it. (I imported into MS Paint and shrank the image)
 - Fitbit does not currently support progressive jpegs. To fix, switch to a png or convert it to a regular jpeg.
