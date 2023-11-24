document.addEventListener('DOMContentLoaded', () => {

  document.getElementById('thumbBtn').addEventListener('click', () => {

    let instance = new $FSI.ThumbBar('thumbEle', {
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
      onReady: () => {
        // show FSI ThumbBar instance and hide image
        document.getElementById('thumbEle').style.visibility = 'visible'
        document.getElementById('thumbImg').style.display = 'none'
        document.getElementById('thumbBtn').style.display = 'none'
        document.getElementById('thumbText').style.display = 'none'
        // Start auto rotation
        setTimeout(() => {
          instance.startAutoRotate(1)
        }, 500)
      },

    }, true)

  })

})
