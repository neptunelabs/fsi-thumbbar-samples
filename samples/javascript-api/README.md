# JavaScript API Sample

FSI ThumbBar contains an extensive JS API with methods and callbacks that you can use.
You can find [an overview of all available parameters in the corresponding documentation](https://docs.neptunelabs.com/docs/fsi-thumbbar/js-api/public-methods).

This example is a simple demonstration of how to use these methods and callbacks.

To display a thumb bar, all you need to do is add the following script to the top of your web page:

```html
<script
  src='https://fsi.domain.tld/fsi/viewer/applications/thumbbar/js/fsithumbbar.js'
</script>
```
This will ensure that the FSI ThumbBar is loaded.

Normally you would need to place the *<fsi-thumbbar>* tag in your source code where you want the viewer to be displayed.

In this example, we only want to display the viewer in place of an image when a button is clicked. The image slideshow with metadata will appear and start rotating.
This means that the viewer is initialised by JavaScript.

To do this, we have created this part in the body:

```html
  <div class="bg-light g-3 py-3 col-sm-8 col-md-12 productContainer" id="productContainer">
    <img id="thumbImg" src="{{&fsi.server}}/{{&fsi.context}}/server?type=image&source=images/samples/ssi/furniture/shelves-4032134.jpg&width=1269&rect=0.2888,0.34931,0.65009,0.27263&height=300&effects=pad(CC,FFFFFF),transparency(50)" width="1269" alt="" height="300">
    <p class="text" id="thumbText">MEGA DEALS:<br/> UP TO 50% OFF</p>
    <button id="thumbBtn" class="btn">VIEW DEALS OF THE DAY</button>
    <div class="thumbContainer" id="thumbEle"></div>
  </div>
```
`productContainer` is the div that contains all the elements.
`thumbImg` is the image that will be displayed on load and replaced by the viewer.
The `thumbContainer` div will contain the FSI viewer.
The `thumbBtn` button is used to switch from the image to the viewer.

In the corresponding `style.css` the image, text and button are placed above the viewer div with `z-index`:

```css
.productContainer .img {
  z-index: 10;
  position: absolute;
}

.productContainer .btn {
  position: absolute;
  z-index: 15;
}

.productContainer .text {
  position: absolute;
  z-index: 15;
}
```

The switch on button click is achieved via JS in the corresponding `script.js`:

```js
document.addEventListener('DOMContentLoaded', () => {

  document.getElementById('thumbBtn').addEventListener('click', () => {

    const show = () => {
      // show FSI ThumbBar instance and hide image
      document.getElementById('thumbEle').style.visibility = 'visible'
      document.getElementById('thumbImg').style.display = 'none'
      document.getElementById('thumbBtn').style.display = 'none'
      document.getElementById('thumbText').style.display = 'none'
      // Start auto rotation
      setTimeout(() => {
        instance.startAutoRotate(1)
      }, 500)
    }

    const instance = $FSI.createNode("fsi-thumbbar",{
      width:'100%',
      height:'300px',
      imagesources:'images/samples/ssi/furniture/home-7473734.jpg, images/samples/ssi/furniture/home-7531451.jpg, images/samples/ssi/furniture/home-7531461_1920.jpg, images/samples/ssi/furniture/home-7531469.jpg, images/samples/ssi/furniture/home-7567164.jpg, images/samples/ssi/furniture/interior-design-6012873.jpg, images/samples/ssi/furniture/dresser-6717656.jpg, images/samples/ssi/furniture/living-room-7225005.jpg, images/samples/ssi/furniture/living-room-7547558.jpg, images/samples/ssi/furniture/home-2082923.jpg',
      vertical:'false',
      elementWidth:'250px',
      elementSpacing:'6px',
      alignment:'0.5',
      paddingTop:'0',
      paddingBottom:'0',
      autoCrop:'cc',
      scrollBar:'false',
      thumbLabel:'###iptc.Headline### <br/>###iptc.Caption### <br/><br/>###iptc.Urgency###',
      enableZoom:'true',
      // listen for finished loading FSI ThumbBar and becomes interactive
      onReady: show
    }, true)
    document.getElementById('thumbEle').appendChild(instance)
  })

})

```

A click on the `thumbBtn` element will initialise a new FSI Viewer element in the `thumbEle` element.

We create `show` which is called with the `onReady` callback (see [documentation](https://docs.neptunelabs.com/docs/fsi-thumbbar/js-api/callbacks#onready).
With this, we ensure a smooth transition: Only when the viewer is ready will the viewer element will be set to visible, while the image, text and button are set to `display:none`.

The viewer itself is created with `$FSI.createNode("fsi-thumbbar",{parameters})`.

Then the method `startAutoRotate` will be executed after a timeout (see [documentation](https://docs.neptunelabs.com/docs/fsi-thumbbar/js-api/public-methods#startautorotate)).
