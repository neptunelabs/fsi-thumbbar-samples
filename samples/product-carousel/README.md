# Frontpage - Using FSI ThumbBar for featured products

This readme describes how to achieve the front page example with _FSI ThumbBar_ from _FSI Server_.
The aim of the demo is to show how you can easily integrate the viewer.
You will also learn how to add metadata to images and how to add scroll buttons.

# Using FSI ThumbBar

To display all images with TouchZoom, all you need to do is add the script at the top of your website:

```html
<script
  src='https://fsi.domain.tld/fsi/viewer/applications/thumbbar/js/fsithumbbar.js'
</script>
```

This ensures that FSI ThumbBar is loaded.

Simply embed an FSI ThumbBar tag on the page where you want to display the thumb bar.
In our example, this looks like this:

```html
<fsi-thumbbar
  width="100%"
  height="300px"
  dir="images/samples/grid/colour"
  vertical="false"
  elementWidth="250px"
  elementSpacing="6px"
  alignment="0.5"
  paddingTop="0"
  paddingBottom="0"
  autoCrop="cc"
  scrollBar="false"
  cmdButtonSelector="#myThumbBarControls > input"
  id="fsi-thumbs"
  thumbLabel="###iptc.Caption### <br/>###iptc.FSI Extra###"
  enableZoom="false"
>
</fsi-thumbbar>
```

## Adding Metadata to images

In our example we have displayed some labels beneath the thumb bar.
This is achieved by adding the following parameter: **thumbLabel="###iptc.Caption### <br/>###iptc.FSI Extra###"**

To see how to add the metadata, [please consult readme of the other demo](https://github.com/neptunelabs/fsi-thumbbar-samples/blob/main/samples/frontpage/README.md) .

## Adding Scroll Buttons

If you want to add control buttons to the FSI ThumbBar instance (e.g. as in this example to scroll through the available images), you can do this by
using the cmdButtonSelector parameter and the appropriate HTML attributes.

To place buttons around the FSI ThumbBar element, we create a div with the class fsi-showcase-buttons between the fsi-viewer and the fsi-thumbbar element:

```html
<div class="fsi-showcase-buttons w-100 mx-auto">
  <div class="fsi-showcase-buttons-inner" id="myThumbBarControls">
    <input class="prev" type="button" x-fsi-cmd="previousImage" />
    <input class="next" type="button" x-fsi-cmd="nextImage" />
  </div>
</div>
```

The inner div with the class fsi-showcase-buttons-inner gets the ID myThumbBarControls. This ID must be referenced in the tag as follows:

_cmdButtonSelector="#myThumbBarControls > input"_

The input elements need to be provided with the corresponding FSI commands in order to function properly. In this case, we have added

_x-fsi-cmd="previousImage"_
to the left button and

_x-fsi-cmd="nextImage"_
to the right button.

## Testing with examples from your own server

To test the examples with images from your own [FSI Server](https://www.neptunelabs.com/fsi-server/), please first copy the env.yml.dist file to env.yml and adapt the file, then restart the main demo again.
