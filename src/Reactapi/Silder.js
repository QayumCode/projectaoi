import React, { useState } from 'react'
import SimpleImageSlider from "react-simple-image-slider";
const Silder = () => {
  const [show, setShow] = useState(1)
const sliderImages = [
  {
     url: "https://consumer.huawei.com/content/dam/huawei-cbg-site/en/support/laptop-user-guide/img/laptop.png",
  },
  {
     url: "https://assets3.cbsnewsstatic.com/hub/i/r/2022/09/22/e3733537-0b15-41c8-9da1-058e1bfeb5f1/thumbnail/1200x630/c4d4c050a138824dc9884eee94f20d5f/screen-shot-2022-09-21-at-7-10-48-am.png?v=23da2bed74e9783333cf303fba619e89",
  },
  {
     url: "https://images.indianexpress.com/2023/05/Dell-G15-G16.jpg",
  },
  {
     url: "https://cdn2.cellphones.com.vn/x,webp,q100/media/wysiwyg/laptop/Laptop-6.jpg",
  },
  {
     url: "https://laptop88.vn/media/news/0710_mytnhxchtayApple.jpg",
  },
];
  return (
    <div className='side-bar-img'>
    <div className='bg'>
    <div className='imagesilder'>
      <h3>
        {' '}
      </h3>
      <SimpleImageSlider 
        width={1300}
        height={500}
        images={sliderImages}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        onStartSlide={(index , length)=>{
          setShow(index)
        }}
        autoPlayDelay={5}
       />
      <div style={{fontSize: "2rem"}}>
      </div>
    </div>
    </div>
    <div className=''>
      
    </div>
    </div>
  )
}

export default Silder
