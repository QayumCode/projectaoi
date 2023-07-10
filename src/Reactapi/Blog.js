import { noAuto } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faHeart,  faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { faSearch, faStar,   faCartShopping, faInbox, faMoneyBill, faTruck, faChartSimple,  faShoppingCart, faPhone,  faLocation, faLocationDot, faCodeCompare, faRightToBracket, faHeartBroken, faClose, faArrowLeft, faBars, faPlus, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import SimpleImageSlider from 'react-simple-image-slider'


const Blog = () => {
    const getTime = new Date().toLocaleTimeString();
  

    const [time, setTime] = useState(getTime)
  
    const updateTime = () => {
      const getTime = new Date().toLocaleTimeString()
      setTime(getTime)
    }
  
    setInterval(updateTime, 1000)


    const silderImages = [
        {
            url: "https://laptopmall.pk/storage/media/u5NcK0InJVDnUDJGrwIi8sinQTwUuUqaLuJ5GQNs.jpg"
        },
        {
            url: "https://laptopmall.pk/storage/media/sA0g9n3XmMIPeSwdMRsTVUWdXhqzlNAD0g4bEP75.png"
        },
        {
            url: "https://laptopmall.pk/storage/media/YQH9zCYNMabEekjLO6PVts2KJMLvLFCiUIf0cMRy.png"
        }
    ]



    const [fix, setFix] = useState(false)


    function setFixed()
    {
        if(window.scrollY >= 130) 
        {
            setFix(true)
        }else
        {
            setFix(false)
        }
    }

    window.addEventListener('scroll', setFixed)
  return (
        <div className='remove-website'>
        <div className='t-te'>
            <div className='text-to-1'>
                <div className='tex-1'>
                    <p>Welcome to Laptop Mall, House of Al Nefouth Electronics. Your one-stop store to everything Tech. Laptop Price in Pakistan. Best Used Laptop Shop.</p>
                </div>
                <div className='dis-te-1'>
        <div className='ic-na-1'>
            <a href=""><p><FontAwesomeIcon icon={faPhone} /> Contect</p></a>
        </div>|
        <div className='ic-na-1'>
            <p><FontAwesomeIcon icon={faCodeCompare} /> Compare</p>
        </div>|
        <div className='ic-na-1'>
            <p><FontAwesomeIcon icon={faRightToBracket} /> Login</p>
        </div>
        </div>
        <div className='line-10'></div>
            </div>
        </div>

        <div className='ser-box-1'>
            <div className={fix?'sear-content fixed':'sear-content'}>
                <div className='img-s-lo ser-1'>
                <img src="https://mir-s3-cdn-cf.behance.net/projects/404/51c9b4153172037.Y3JvcCwzMTk3LDI1MDEsNzEsMA.png" alt="" />
                </div>
                <div className='ser-1 bg-b-s-1 dis-no'>
                <input type='text' placeholder='Search For Products' />
                <select>
                    <option value="All Categories">All Categories</option>
                    <option value="Laptops">Laptops</option>
                    <option value="Tablets">Tablets</option>
                    <option value="Exteral Hand Drives">Exteral Hand Drives</option>
                    <option value="Graphic Cards">Graphic Cards</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Laptop Parts">Laptop Parts</option>
                    <option value="Used Laptop">Used Laptop</option>
                    <option value="Desktops & All-in-one">Desktops & All-in-one</option>
                    <option value="Printers">Printers</option>
                    <option value="Laptop Charger">Laptop Charger</option>
                    <option value="Laptop Bettery">Laptop Bettery</option>
                    <option value="Laptop LED / LCD">Laptop LED / LCD</option>
                    <option value="Laptop KeyBoard">Laptop KeyBoard</option>
                    <option value="Laptop MonterBoard">Laptop MonterBoard</option>
                    </select>
                    <button><FontAwesomeIcon icon={faSearch} /> </button>
                    </div>
                  
              
                <div className="ic-sh-car">
                <div className="ser-1">
                    <div className='ic-h-sh'>
               <h5><FontAwesomeIcon icon={faHeart} />  <span>Favorites </span></h5>
                   </div>
                   <div  className='ic-h-sh'>
                  <h5><FontAwesomeIcon icon={faShoppingCart} /> <span>PKR 0.00 </span></h5>
                   </div>
                </div>
                </div>
            </div>
        </div>
        <hr />

            <div className='nav-lp-na'>
                <div className='nav-content'>
                    <div className='content-bg'>
                        <div className="lp-na-">
                            <div className='All-na-lp'>
                                <div className='All-bg'>
                                    <div className='te-i-bars-1'><h6>ALL CATEGORIES <FontAwesomeIcon icon={faBars} /></h6></div>
                                </div>
                            </div>
                        </div>
                        <div className="lp-na-">
                            <div className='compt-lp-na'>
                                <div className='complt-lap'>
                                    <div><p className='h-p-1'>Loptops</p></div>
                                    <div><p className='h-p-2'>Used Laptops</p></div>
                                    <div><p className='h-p-3'>Accessories</p></div>
                                    <div><p className='h-p-4'>External Hard Drives</p></div>
                                    <div><p className='h-p-5'>Tablets</p></div>
                                    <div><p className='h-p-6'>Graphic Cards</p></div>
                                    <div><p className='h-p-7'>Printers</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="lp-na-">
                            <div className='lp-mall'>
                                <p>LopTops <br />Mall</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='img-silder-container'>
                <div className='img-silder-content'>
                    <div className='lptp-name-bar-1'>
                        <div>
                            <div><p>Laptop</p></div>
                            <div><p>Used Laptops</p></div>
                            <div><p>Laptop Parts <FontAwesomeIcon icon={faCircleArrowRight} /></p></div>
                            <div><p>Accessories</p></div>
                            <div><p>External Hard Drives</p></div>
                            <div><p>Tablets</p></div>
                            <div><p>Graphic Cards</p></div>
                            <div><p>Tablets</p></div>
                            <div><p>Printers</p></div>
                            <div><p>Laptop Mall</p></div>
                            <div><p><FontAwesomeIcon icon={faPlus} /> All Categories</p></div>
                        </div>
                    </div>
                    <div className='lptp-silder-bar-1'>
                
                        <div className='simple-silder'>
                            <h3>
                                {' '}
                            </h3>
                            <SimpleImageSlider
                            images={silderImages}
                            width={750}
                            height={400}
                            showBullets={true}
                            autoPlay={true}
                           />
                        </div>
                   
                    </div>
                    <div className='lptp-simple-img-bar-1'>
                    <img src="https://laptopmall.pk/storage/media/B7Y0lPtxyd3Ui3WNmwgWJLIplD5hwXxjrrBPQtgL.jpg" alt="" />
                    <img src="https://laptopmall.pk/storage/media/l8UDihOYGROP8jn85uUNQ738i78o7uGhOHfHruLC.jpg" alt="" />
                    </div>
                </div>
            </div>
    <hr />
    <hr />
      <div >


        <div className='simp-si'>
            <div className='simple-web-content'>
                <div className="bxo-web-1">
                    <h6>Free Delivery!</h6>
                    <p>Hassle Free delivery in Pakistan</p>
                </div>
                <div className="bxo-web-1">
                <h6>100%</h6>
                    <p>Money back guarantee</p>
                </div>
                <div className="bxo-web-1">
                <h6>Shop Now!</h6>
                    <p>Get Discounts from Laptop Mall</p>
                </div>
                <div className="bxo-web-1">
                <h6>Track Order!</h6>
                    <p>Now Track Orders on panel</p>
                </div>
                <div className="bxo-web-1">
                <h6>Exclusive Laptops!</h6>
                    <p>Top of the line deals</p>
                </div>
            </div>
        </div>

        <div className='dis-blog'>
            <div className="box-1">
                <img src="https://pngimg.com/uploads/macbook/macbook_PNG17.png" alt="" />
            </div>
            <div className="box-2">
                <h3><FontAwesomeIcon icon={faSearch } style={{fontSize:"20px"}}/> Apple MackBook Pro 13"</h3>
                <ul>
                    <li>13-inch Retina display</li>
                    <li>Intel Core i7 or i9 processor</li>
                    <li>Up to  64GB memary</li>
                    <li>Up to 8TB storage</li>
                    <li>Up to 11 hours bettery life</li>
                    <li>Touch Bar and Touch ID</li>
                </ul>
                <a href="">Add to wishlist</a>
                <div>
                <button className='btn-blog'>Add to quote</button>
                </div>
              
            </div>
            <div className="box-3">
                <div className='bg-b-3'>
                    <h5><FontAwesomeIcon icon={faInbox} />Guaranteed<br />Less Price</h5>
                    <h5><FontAwesomeIcon icon={faMoneyBill} />Large Stock<br />Availability</h5>
                    <h5><FontAwesomeIcon icon={faTruck} />100% Original<br />Produects</h5>
                </div>
                <div className='logo-card'>
                    <img src="https://www.nicepng.com/png/full/303-3033721_visa-mastercard-american-express-diners- 
                     club.png" alt="" />
                </div>
            </div>
        </div>
      </div>
    <div>
  <div>
</div>

               
           <div className="lapt-1">
            
              <h4>Laptop Price  in Pakistan <br /> <span className='city-name'>Laptop Price in Khanewal </span></h4>
              
            <div className="laptop-1">
                <img src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/category/dv7620nt-categorypage-lf-800x620.png?fmt=png-alpha&wid=800&hei=620" alt="" />
            </div>
            <div className="laptop-1">
                <img src="https://www.pngarts.com/files/1/Apple-Tablet-PNG-Download-Image.png" alt="" />
            </div>
            <div className="laptop-1">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw7N2masjs0FDESBUqKFQ9xSE6ZcH0anolvw&usqp=CAU" alt="" />
            </div>
            <div className="laptop-1">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS34FUeHSTO31HWVPigEG2BTJxcMCYcEGlcQA&usqp=CAU" alt="" />
            </div>
            <div className="laptop-1">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQDrbr_eDdyQBd68JzgCATyElfi4HTvj1xPg&usqp=CAU" alt="" />
            </div>
            <div className="laptop-1">
            <img src="https://www.pngitem.com/pimgs/m/761-7613208_computer-parts-png-transparent-png.png" alt="" />
            </div>
           </div>
      </div>
    

      <div className='pri-lap-dis'>
        <div>
            <div className='bg-lap-te-1'>
                <div className='images-laptop zoom'>
                    <img src="https://consumer.huawei.com/content/dam/huawei-cbg-site/en/support/laptop-user-guide/img/laptop.png" alt="" />
                   
                    <div className='text-mac'>
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='mac-p-2'>
                    <p>Apple MacBook Air MGN93<br />M1 Laptop Price in Pak...</p>
                    </div> 
                    <div className='line-2'></div>
                    <div className='price-laptop-2'>
                        <h6>PKR 225,000.00</h6>
                    </div>
                   
                    <div className='add-card-btn-1'>
                        <div className='side-st-1'></div>
                        <button> <FontAwesomeIcon icon={faCartShopping} /> Add To Card</button>
                       <FontAwesomeIcon icon={faHeart} / >
                       <FontAwesomeIcon icon={faChartSimple} />
                    </div>
                </div>
            </div>
        </div>


        <div>
            <div className='bg-lap-te-2'>
                <div className='images-laptop zoom'>
                    <img src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/15-3520/pdp/laptop-inspiron-15-3520-pdp-mod01-bk.psd?fmt=png-alpha&wid=5000&hei=2800" alt="" />
                  
                    <div className='text-mac'>
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='mac-p-2'>
                    <p>Dell Latitude 7400 Core i5<br />Laptop Price In Khanewal</p>
                    </div>
                    <div className='line-2'></div>
                    <div className='price-laptop-2'>
                        <h6>PKR 72,500.00</h6>
                    </div>
                    <div className='add-card-btn-1'>
                        <div className='side-st-1'></div>
                        <button> <FontAwesomeIcon icon={faCartShopping} /> Add To Card</button>
                        <FontAwesomeIcon icon={faHeart} / >
                       <FontAwesomeIcon icon={faChartSimple} />
                    </div>
                </div>
            </div>
        </div>

         
        <div>
            <div className='bg-lap-te-3'>
                <div className='images-laptop zoom' >
                    <img src="https://freepngimg.com/thumb/laptop/162234-laptop-notebook-pic-portable-free-clipart-hq-thumb.png" alt="" />
                  
                    <div className='text-mac'>
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='mac-p-2'>
                    <p>Hp EiteBook 840 G4 Core<br />i5-7th Generation laptop...</p>
                    </div>
                    <div className='line-2'></div>
                    <div className='price-laptop-2'>
                        <h6>PKR 60,000.00</h6>
                    </div>
                    <div className='add-card-btn-1'>
                    <div className='side-st-1'></div>
                        <button> <FontAwesomeIcon icon={faCartShopping} />  Add To Card</button>
                        <FontAwesomeIcon icon={faHeart} / >
                       <FontAwesomeIcon icon={faChartSimple} />
                    </div>
                </div>
            </div>
        </div>

         
        <div>
            <div className='bg-lap-te-4'> 
                <div className='images-laptop zoom'>
                    <img src="https://pngfile.net/public/uploads/preview/hp-pavilion-laptop-21590767404jgtcocx6jq.png" alt="" />
                   
                    <div className='text-mac'>
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='mac-p-2'>
                    <p>Hp EiteBook 840 G5 Core<br />i5 Laptop Price In Pakistan</p>
                    </div>
                    <div className='line-2'></div>
                    <div className='price-laptop-2'>
                        <h6>PKR 75,000.00</h6>
                    </div>
                    <div className='add-card-btn-1'>
                    <div className='side-st-1'></div>
                        <button> <FontAwesomeIcon icon={faCartShopping} />  Add To Card</button>
                        <FontAwesomeIcon icon={faHeart} / >
                       <FontAwesomeIcon icon={faChartSimple} />
                    </div>
                </div>
            </div>
        </div>

         
        <div>
            <div className='bg-lap-te-5'>
                <div className='images-laptop zoom'>
                    <img src="https://res.cloudinary.com/exceldisc/image/upload/v1674641829/products/8103cba0-d4fa-46b7-85f3-8fcd718909ff.png" alt="" />
                   
                    <div className='text-mac'>
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='mac-p-2'>
                    <p>Hp EiteBook  1040  G3<br />Laptop Price In Khanewal</p>
                    </div>
                    <div className='line-2'></div>
                    <div className='price-laptop-2'>
                        <h6>PKR 68,000.00</h6>
                    </div>
                    <div className='add-card-btn-1'>
                        <div className='side-st-1'></div>
                        <button> <FontAwesomeIcon icon={faCartShopping} /> Add To Card</button>
                        <FontAwesomeIcon icon={faHeart} / >
                       <FontAwesomeIcon icon={faChartSimple} />
                    </div>
                </div>
            </div>
        </div> 
       </div>
        <hr />
       <div>
        <div className='laptop-name-2'>
            <h6 className='one-name'>Latest Products</h6>
            <h6 className='two-name'>Used Laptops Price in Pakistan</h6>
            <h6 className='three-name'>Laptops Parts in Pakistan</h6>
            <h6 className='four-name'>Tablets Prices in Pakistan</h6>
  
        </div>
       </div>
  <hr />
  <hr />




                {/* STEP TWO  */}



            <div className='container-top-pri-nm-lptp'>
     
        <div>
            <div className='bg-lap-te'>
                <div className='images-laptop-1'>
                    <img src="https://www.pngitem.com/pimgs/m/305-3050797_computer-case-png-transparent-png.png" alt="" />
                   
                    <div className='text-mac'>
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />(0)
                    </div>
                    <div className='mac-p-1'>
                    <p>DELL OPTIPLEX 3000 Core  <br/> i5 Desktop Price in Pakistan</p>
                    </div>
                    <div className='line-3'></div>
                    <div className='price-laptop-1'>
                        <h6>PKR 179,000.00</h6>
                    </div>
                    <div className='add-card-btn-2'>
                        <div className='side-st-2'>
                        <FontAwesomeIcon icon={faHeart} / >
                        <button> <FontAwesomeIcon icon={faCartShopping} />  Add To Card</button>
                        <FontAwesomeIcon icon={faChartSimple} />
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div>
            <div className='bg-lap-te'>
                <div className='images-laptop-1'>
                    <img src="https://digi-station.com/wp-content/uploads/2021/10/victus-16-sr_e.jpg" alt="" />
                  
                    <div className='text-mac'>
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />(0)
                    </div>
                    <div className='mac-p-1'>
                    <p>HP VICTUS 15 FA1020NI <br /> Core i7 13th Generation...</p>
                    </div>
                    <div className='line-3'></div>
                    <div className='price-laptop-1'>
                        <h6>PKR 365,000.00</h6>
                    </div>
                    <div className='add-card-btn-2'>
                    <div className='side-st-2'>
                        <FontAwesomeIcon icon={faHeart} / >
                        <button> <FontAwesomeIcon icon={faCartShopping} />  Add To Card</button>
                        <FontAwesomeIcon icon={faChartSimple} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

         
        <div>
            <div className='bg-lap-te'>
                <div className='images-laptop-1'>
                    <img src="https://laptopmall.pk/storage/media/46cmVJ1xo1eCqZkwH1ttFTrCZ4GVNGmF2ppCDqDt.jpg" alt="" />
                  
                    <div className='text-mac'>
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />(0)
                    </div>
                    <div className='mac-p-1'>
                    <p>HP 255 G9 AMD RYZEN 5 <br /> Laptop Price in Pakistan</p>
                    </div>
                    <div className='line-3'></div>
                    <div className='price-laptop-1'>
                        <h6>PKR  147,000.00</h6>
                    </div>
                    <div className='add-card-btn-2'>
                    <div className='side-st-2'>
                        <FontAwesomeIcon icon={faHeart} / >
                        <button> <FontAwesomeIcon icon={faCartShopping} />  Add To Card</button>
                        <FontAwesomeIcon icon={faChartSimple} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

         
        <div>
            <div className='bg-lap-te'>
                <div className='images-laptop-1'>
                    <img src="https://laptopmall.pk/storage/media/JFI1R9SdETeBsHAt6FlZ0ru6xc2NSPREiQXwFLAg.jpg" alt="" />
                   
                    <div className='text-mac'>
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />(0)
                    </div>
                    <div className='mac-p-1'>
                    <p>HP Pavilion 15 EG2009 Core <br />i7 Laptop Price in Pakistan</p>
                    </div>
                    <div className='line-3'></div>
                    <div className='price-laptop-1'>
                        <h6>PKR 255,000.00</h6>
                    </div>
                    <div className='add-card-btn-2'>
                    <div className='side-st-2'>
                        <FontAwesomeIcon icon={faHeart} / >
                        <button> <FontAwesomeIcon icon={faCartShopping} />  Add To Card</button>
                        <FontAwesomeIcon icon={faChartSimple} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

         
        <div>
            <div className='bg-lap-te'>
                <div className='images-laptop-1'>
                    <img src="https://laptopmall.pk/storage/media/rmgvU6ItoQ4R7wdS2g9rV5OAyBpTx62I3TZXVtDN.jpg" alt="" />
                   
                    <div className='text-mac'>
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />(0)
                    </div>
                    <div className='mac-p-1'>
                    <p>HP Pavilion 14 DY2050WM <br />Core i5 X360 Touch...</p>
                    </div>
                    <div className='line-3'></div>
                    <div className='price-laptop-1'>
                        <h6>PKR 215,000.00</h6>
                    </div>
                    <div className='add-card-btn-2'>
                    <div className='side-st-2'>
                        <FontAwesomeIcon icon={faHeart} / >
                        <button> <FontAwesomeIcon icon={faCartShopping} />  Add To Card</button>
                        <FontAwesomeIcon icon={faChartSimple} />
                        </div>
                    </div>
                </div>
        

               
     </div>
     </div>
<hr />

            {/* 3   33    3   3    3             */}


   
        <div>
        <div className='bg-lap-te'>
                <div className='images-laptop-1'>
                    <img src="https://laptopmall.pk/storage/media/qJkrdM6zlRRk3LUrR0qW4EmGicUruCKHw68VZgrS.png" style={{height:"150px"}} alt="" />
                   
                    <div className='text-mac'>
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />(0)
                    </div>
                    <div className='mac-p-1'>
                    <p>HP 15s FQ5298 Core i7 12th <br />Generation Laptop Price in Pakistan</p>
                    </div>
                    <div className='line-3'></div>
                    <div className='price-laptop-1'>
                        <h6>PKR 215,000.00</h6>
                    </div>
                    <div className='add-card-btn-2'>
                    <div className='side-st-2'>
                        <FontAwesomeIcon icon={faHeart} / >
                        <button> <FontAwesomeIcon icon={faCartShopping} />  Add To Card</button>
                        <FontAwesomeIcon icon={faChartSimple} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div className='bg-lap-te'>
                <div className='images-laptop-1'>
                    <img src="https://laptopmall.pk/storage/media/xAJpODZ5vhfvyaagGHpd04Jf5iXu6vSTZPsTrj7J.jpg" alt="" />
                   
                    <div className='text-mac'>
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />(0)
                    </div>

                    <div className='mac-p-1'>
                    <p>Dell Vostro 3520 Core i7 < br />Laptop Price in Pakistan</p>
                    </div>
                    <div className='line-3'></div>
                    <div className='price-laptop-1'>
                        <h6>PKR 238,500.00</h6>
                    </div>
                    <div className='add-card-btn-2'>
                    <div className='side-st-2'>
                        <FontAwesomeIcon icon={faHeart} / >
                        <button> <FontAwesomeIcon icon={faCartShopping} />  Add To Card</button>
                        <FontAwesomeIcon icon={faChartSimple} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div className='bg-lap-te'>
                <div className='images-laptop-1'>
                    <img src="https://laptopmall.pk/storage/media/7F1Gcr0VIbmDmBzMPpaz7IaOB9ti6rDqKiLOyxRy.jpg" alt="" />
                   
                    <div className='text-mac'>
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />(0)
                    </div>
                    <div className='mac-p-1'>
                    <p>15M HDMI CABLE 4K HDTV <br /> PREMIUM Price in Pakistan</p>
                    </div>
                    <div className='line-3'></div>
                    <div className='price-laptop-1'>
                        <h6>PKR 4,500.00</h6>
                    </div>
                    <div className='add-card-btn-2'>
                    <div className='side-st-2'>
                        <FontAwesomeIcon icon={faHeart} / >
                        <button> <FontAwesomeIcon icon={faCartShopping} />  Add To Card</button>
                        <FontAwesomeIcon icon={faChartSimple} />
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div>
            <div className='bg-lap-te'>
                <div className='images-laptop-1'>
                    <img src="https://laptopmall.pk/storage/media/JFI1R9SdETeBsHAt6FlZ0ru6xc2NSPREiQXwFLAg.jpg" style={{height:"150px"}} alt="" />
                   
                    <div className='text-mac'>
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />(0)
                    </div>
                   
                    <div className='mac-p-1'>
                    <p>1.5M USB EXTENSION CABLE<br  />Price in Pakistan</p>
                    </div>
                    <div className='line-3'></div>
                    <div className='price-laptop-1'>
                        <h6>PKR 750.00</h6>
                    </div>
                    <div className='add-card-btn-2'>
                    <div className='side-st-2'>
                        <FontAwesomeIcon icon={faHeart} / >
                        <button> <FontAwesomeIcon icon={faCartShopping} />  Add To Card</button>
                        <FontAwesomeIcon icon={faChartSimple} />
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div>
            <div className='bg-lap-te'>
                <div className='images-laptop-1'>
                    <img src="https://laptopmall.pk/storage/media/pJ8H9hGnreoaDycqEPoAc2gBsOM3kJTKEDDV7BI5.jpg" alt="" />
                   
                    <div className='text-mac'>
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />(0)
                    </div>
                    
                    <div className='mac-p-1'>
                    <p>1.5 Meter HDMI Cable <br /> Price in Pakistan</p>
                    </div>
                    <div className='line-3'></div>
                    <div className='price-laptop-1'>
                        <h6>PKR 195.00</h6>
                    </div>
                    <div className='add-card-btn-2'>
                    <div className='side-st-2'>
                        <FontAwesomeIcon icon={faHeart} / >
                        <button> <FontAwesomeIcon icon={faCartShopping} />  Add To Card</button>
                        <FontAwesomeIcon icon={faChartSimple} />
                        </div>
                    </div>
                </div>
            </div>
  


</div>
<hr />
               
    {/* // 4  4 4 44   44  4  44    4  4   4  4  */}



    
       
        <div>
            <div className='bg-lap-te'>
                <div className='images-laptop-1'>
                    <img src="https://laptopmall.pk/storage/media/sIGQ7r91raqr8iCX5jdGbh2xi8z9kSuexxq2dIBq.webp" alt="" />
                   
                    <div className='text-mac'>
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />(0)
                    </div>
                    <div className='mac-p-1'>
                    <p>Dell Inspiron 3501 Core i5 <br /> Laptop Price in Pakistan</p>
                    </div>
                    <div className='line-3'></div>
                    <div className='price-laptop-1'>
                        <h6>PKR 165,000.00</h6>
                    </div>
                    <div className='add-card-btn-2'>
                    <div className='side-st-2'>
                        <FontAwesomeIcon icon={faHeart} / >
                        <button> <FontAwesomeIcon icon={faCartShopping} />  Add To Card</button>
                        <FontAwesomeIcon icon={faChartSimple} />
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div>
            <div className='bg-lap-te'>
                <div className='images-laptop-1'>
                    <img src="https://laptopmall.pk/storage/media/d6ikDAI9SOBQUax7QDC17fqb2f9eTBbNzIM1YI4K.jpg" alt="" />
                   
                    <div className='text-mac'>
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />(0)
                    </div>

                    <div className='mac-p-1'>
                    <p>Dell ProBook 650 G5 Core i5 <br />Laptop Price in Pakistan</p>
                    </div>
                    <div className='line-3'></div>
                    <div className='price-laptop-1'>
                        <h6>PKR 80,000.00</h6>
                    </div>
                    <div className='add-card-btn-2'>
                    <div className='side-st-2'>
                        <FontAwesomeIcon icon={faHeart} / >
                        <button> <FontAwesomeIcon icon={faCartShopping} />  Add To Card</button>
                        <FontAwesomeIcon icon={faChartSimple} />
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div>
            <div className='bg-lap-te'>
                <div className='images-laptop-1'>
                    <img src="https://laptopmall.pk/storage/media/bSllbs7OiV8b1Canvz7WkJfrPfBcnx4JiDlzBbTB.jpg" alt="" />
                   
                    <div className='text-mac'>
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />(0)
                    </div>
                    <div className='mac-p-1'>
                    <p>HP ProBook 650 G5 Core i5<br /> Laptop Price in Pakistan</p>
                    </div>
                    <div className='line-3'></div>
                    <div className='price-laptop-1'>
                        <h6>PKR 88,000.00</h6>
                    </div>
                    <div className='add-card-btn-2'>
                    <div className='side-st-2'>
                        <FontAwesomeIcon icon={faHeart} / >
                        <button> <FontAwesomeIcon icon={faCartShopping} />  Add To Card</button>
                        <FontAwesomeIcon icon={faChartSimple} />
                        </div>
                    </div>
                </div>
            </div>
        </div>


        
        <div>
            <div className='bg-lap-te'>
                <div className='images-laptop-1'>
                    <img src="https://laptopmall.pk/storage/media/Hx77S8pYZSY2e0D0EgZCBXrbrznOD0QpDYJ29q7G.jpg" alt="" />
                   
                    <div className='text-mac'>
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />(0)
                    </div>
                    <div className='mac-p-1'>
                    <p>HP ProBook 450 G6 Core <br />i5 Laptop Price in Pakistan</p>
                    </div>
                    <div className='line-3'></div>
                    <div className='price-laptop-1'>
                        <h6>PKR 70,000.00</h6>
                    </div>
                    <div className='add-card-btn-2'>
                    <div className='side-st-2'>
                        <FontAwesomeIcon icon={faHeart} / >
                        <button> <FontAwesomeIcon icon={faCartShopping} />  Add To Card</button>
                        <FontAwesomeIcon icon={faChartSimple} />
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div>
            <div className='bg-lap-te'>
                <div className='images-laptop-1'>
                    <img src="https://laptopmall.pk/storage/media/nnFnFEz9ztqLMALGc4lrHLnVdwq0TDpTO7ZKHkyN.jpg" alt="" />
                   
                    <div className='text-mac'>
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />(0)
                    </div>
                    <div className='mac-p-1'>
                    <p>HP ProBook 450 G5 Core i7<br /> Laptop Price in Pakistan</p>
                    </div>
                    <div className='line-3'></div>
                    <div className='price-laptop-1'>
                        <h6>PKR 78,000.00</h6>
                    </div>
                    <div className='add-card-btn-2'>
                    <div className='side-st-2'>
                        <FontAwesomeIcon icon={faHeart} / >
                        <button> <FontAwesomeIcon icon={faCartShopping} />  Add To Card</button>
                        <FontAwesomeIcon icon={faChartSimple} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div>
            <div className='bg-lap-te'>
                <div className='images-laptop-1'>
                    <img src="https://laptopmall.pk/storage/media/gCEPLxxO6oTJ89ytmOHrszXE4Ru6qPGMyBFbOesF.jpg"  alt="" />
                   
                    <div className='text-mac'>
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />(0)
                    </div>
                    <div className='mac-p-1'>
                    <p>HP ProBook 450 G5 Core i5 <br /> Laptop Price in Pakistan</p>
                    </div>
                    <div className='line-3'></div>
                    <div className='price-laptop-1'>
                        <h6>PKR 68,000.00</h6>
                    </div>
                    <div className='add-card-btn-2'>
                    <div className='side-st-2'>
                        <FontAwesomeIcon icon={faHeart} / >
                        <button> <FontAwesomeIcon icon={faCartShopping} />  Add To Card</button>
                        <FontAwesomeIcon icon={faChartSimple} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className='bg-lap-te'>
                <div className='images-laptop-1'>
                    <img src="https://laptopmall.pk/storage/media/mc95wfwdSUVttj8syNITtgQhplvSBOzxb2x3CrDU.jpg" style={{height:"150px"}} alt="" />
                   
                    <div className='text-mac'>
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />(0)
                    </div>
                    <div className='mac-p-1'>
                    <p>Lenovo ThinkPAD E480 Core<br /> i3 Laptop Price in Pakistan</p>
                    </div>
                    <div className='line-3'></div>
                    <div className='price-laptop-1'>
                        <h6>PKR 65,000.00</h6>
                    </div>
                    <div className='add-card-btn-2'>
                    <div className='side-st-2'>
                        <FontAwesomeIcon icon={faHeart} / >
                        <button> <FontAwesomeIcon icon={faCartShopping} />  Add To Card</button>
                        <FontAwesomeIcon icon={faChartSimple} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div className='bg-lap-te'>
                <div className='images-laptop-1'>
                    <img src="https://laptopmall.pk/storage/media/cS3lFxkF94Bru0Qcbdr3wojDc0wjoI4Es38FsefT.jpg" alt="" />
                   
                    <div className='text-mac'>
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />(0)
                    </div>
                    <div className='line-3'></div>
                    <div className='mac-p-1'>
                    <p>HP EliteBook 840 G4 Laptop<br /> Battery Price in Pakistan</p>
                    </div>
                    <div className='price-laptop-1'>
                        <h6>PKR 7,800.00</h6>
                    </div>
                    <div className='add-card-btn-2'>
                    <div className='side-st-2'>
                        <FontAwesomeIcon icon={faHeart} / >
                        <button> <FontAwesomeIcon icon={faCartShopping} />  Add To Card</button>
                        <FontAwesomeIcon icon={faChartSimple} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

 

        <div>
            <div className='bg-lap-te'>
                <div className='images-laptop-1'>
                    <img src="https://laptopmall.pk/storage/media/PsGWp9ovJqFB80ymDkxJzNg89AFAKPvRv3z0pwqR.jpg" alt="" />
                   
                    <div className='text-mac'>
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />(0)
                    </div>
                    <div className='mac-p-1'>
                    <p>HP EliteBook 840 G4 Laptop<br /> Charger Price in Pakistan</p>
                    </div>
                    <div className='line-3'></div>
                    <div className='price-laptop-1'>
                        <h6>PKR 1,750.00</h6>
                    </div>
                    <div className='add-card-btn-2'>
                    <div className='side-st-2'>
                        <FontAwesomeIcon icon={faHeart} / >
                        <button> <FontAwesomeIcon icon={faCartShopping} />  Add To Card</button>
                        <FontAwesomeIcon icon={faChartSimple} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div className='bg-lap-te'>
                <div className='images-laptop-1'>
                    <img src="https://laptopmall.pk/storage/media/krm71E1TSdk6l1jbNr9fwqT9ERWi5PrcCzCOyyUW.jpg"  style={{height:"150px"}} alt="" />
                   
                    <div className='text-mac'>
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />(0)
                    </div>
                    <div className='line-3'></div>
                    <div className='mac-p-1'>
                    <p>HP EliteBook Folio 9470m<br /> Laptop Battery Price in Pakistan</p>
                    </div>
                    <div className='price-laptop-1'>
                        <h6>PKR 6,800.00</h6>
                    </div>
                    <div className='add-card-btn-2'>
                    <div className='side-st-2'>
                        <FontAwesomeIcon icon={faHeart} / >
                        <button className='button'> <FontAwesomeIcon icon={faCartShopping} />  Add To Card</button>
                        <FontAwesomeIcon icon={faChartSimple} />
                        </div>
                    </div>
                </div>
            
</div>
</div>
</div>
<hr />


        <div className='logo-silder'>
        <div className='logos'>
        <div className='images-logo'>
            <img src="https://laptopmall.pk/storage/media/gvu9TJzx994ok6QVvOWCT6zevVHOTqJMPbFugTdp.png" alt="" />
            <img src="https://laptopmall.pk/storage/media/q7Dvd3HTlx9cq1cotb6BeOfndBytUxvS1O5NWatY.jpg" alt="" />
            <img src="https://laptopmall.pk/storage/media/7rLLU3FvwKtr3dFnfvb2F7wzZW8bs84oyofebM29.png" alt="" />
            <img src="https://laptopmall.pk/storage/media/CPNLd9rHE6N5f4e2EtzebhlI2nsEtQi2NOuRoDeU.png" alt="" />
            <img src="https://laptopmall.pk/storage/media/jGQ1VfogK19jGt4AbSLehCPBJvQUkSwfg7hNvqKB.png" alt="" />
            <img src="https://laptopmall.pk/storage/media/vx2qZ17UyrvKkWaG82KKDuh3fRsROcqBvn1eal2S.png" alt="" />
            <img src="https://laptopmall.pk/storage/media/hXMCRS6MDeXovgjvC6uuwcofNEcmHRMpJRv37ctN.png" alt="" />
            <img src="https://laptopmall.pk/storage/media/SDGEmnfpGhE5LVNO7zS5VAn4hiNiksMwmJVkx30K.png" alt="" />
            <img src="https://laptopmall.pk/storage/media/yvCfVehECN1vMwKigYMouwRRmimJKFHk6VAKhqtk.png" alt="" />
            <img src="https://laptopmall.pk/storage/media/0nkr4D5bOZrhKQAOcgCeqOsBx8MJGBtT0ehIz17Z.png" alt="" />
        </div>
        <div className='images-logo'>
            <img src="https://laptopmall.pk/storage/media/gvu9TJzx994ok6QVvOWCT6zevVHOTqJMPbFugTdp.png" alt="" />
            <img src="https://laptopmall.pk/storage/media/q7Dvd3HTlx9cq1cotb6BeOfndBytUxvS1O5NWatY.jpg" alt="" />
            <img src="https://laptopmall.pk/storage/media/7rLLU3FvwKtr3dFnfvb2F7wzZW8bs84oyofebM29.png" alt="" />
            <img src="https://laptopmall.pk/storage/media/CPNLd9rHE6N5f4e2EtzebhlI2nsEtQi2NOuRoDeU.png" alt="" />
            <img src="https://laptopmall.pk/storage/media/jGQ1VfogK19jGt4AbSLehCPBJvQUkSwfg7hNvqKB.png" alt="" />
            <img src="https://laptopmall.pk/storage/media/vx2qZ17UyrvKkWaG82KKDuh3fRsROcqBvn1eal2S.png" alt="" />
            <img src="https://laptopmall.pk/storage/media/hXMCRS6MDeXovgjvC6uuwcofNEcmHRMpJRv37ctN.png" alt="" />
            <img src="https://laptopmall.pk/storage/media/SDGEmnfpGhE5LVNO7zS5VAn4hiNiksMwmJVkx30K.png" alt="" />
            <img src="https://laptopmall.pk/storage/media/yvCfVehECN1vMwKigYMouwRRmimJKFHk6VAKhqtk.png" alt="" />
            <img src="https://laptopmall.pk/storage/media/0nkr4D5bOZrhKQAOcgCeqOsBx8MJGBtT0ehIz17Z.png" alt="" />
        </div>
    </div>
    </div>


<hr />
<hr />
  


    <div className='big-pp-pri'>
    
        <div className='big-lp-content'>
            <div className="lp-pr-na-img-bi">
                <div className='pr-na-pr-4'><h6>Welcome Sale!</h6></div>
          <hr />
          <div className='bo-box-1'>
            <img  src="https://laptopmall.pk/storage/media/EaswRK3vhO1ldQFStFMLf7ob2A5BeU1tKr2ARvNc.jpg"  alt="" />
            <div className='na-lp-1'>
                <h6>DELL VOSTRO 3500 Core  i7 Laptop Price in<br /> Pakistan</h6>
                 </div>
                 <div className='line-5'></div>
                 <div className='pr-icon-na'>
                    <h6><span className='sp-1'>PKR 53,500.00</span> <del>PKR 58,000.00 </del>
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    </div>
                    </h6>
                 </div>
                 <div className='line-5'></div>
                 <div className='lp-time'>
                    <div className='bg-time'>
                    <h3>{getTime}</h3>
                    </div>
                 </div>
                 <div className='bt-bg-te'>
                    <h6>Available: <span className='bt-te'>30</span> </h6>
                    <h6>Sold: <span className='bt-te'>0</span> </h6>
                 </div>
                 <div className='line-6'></div>
            </div>
            </div>


            <div className="lp-pr-na-img-de">
            <div className='pr-na-pr-1'><h6>Dell Laptop Price in <br />Pakistan</h6></div>
            <hr />
                <div className='de-1-lp-pr-na'>
                <div className='ic-pr-lp'>
                    <img src="https://laptopmall.pk/storage/media/4O01mHGLaFZptkuIgNm1sB7TTRUHXqHoHg1g9Lws.jpg" alt="" />
                    <div className='di-te'>
                        <div className='na-lp'>
                        <h6>DELL VOSTRO 3500 Core <br /> i7 Laptop Price in Pakistan</h6>
                    <p>PKR 15,000.00</p>
                    </div>
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    </div>
                </div>
                </div>
                <div className='ic-pr-lp'>
                    <img src="https://laptopmall.pk/storage/media/YF7pzqenLgA8juKbT98DK3ncCMuikzEOITXKnxgo.jpg" alt="" />
                    <div className='di-te'>
                    <div className='na-lp'>
                        <h6>Dell Inspiron 3583 Core <br />i5 Laptop Price in Pakistan</h6>
                    <p>PKR 80,000.00</p>
                    </div>
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    </div>
                </div>
                </div>
                <div className='ic-pr-lp'>
                    <img src="https://laptopmall.pk/storage/media/RpMHbGU0pmk5PjAe2rUzVei35APLVvMjl96JgOzp.jpg" style={{height:"80px"}} alt="" />
                    <div className='di-te'>
                    <div className='na-lp'>
                        <h6>Dell Inspiron 3510 Core i3- <br />11th Generation Laptop Price..</h6>
                    <p>PKR 115,000.00</p>
                    </div>
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    </div>
                </div>
                </div>
                <div className='ic-pr-lp'>
                    <img src="https://laptopmall.pk/storage/media/0N3NVav6Qik4NQwbkvnx4YVF03vBozsU22tdcdsi.jpg" alt="" />
                    <div className='di-te'>
                    <div className='na-lp'>
                        <h6>Dell Inspiron 3584 Core<br /> i5 Used Laptop Price in...</h6>
                    <p>PKR 62,000.00</p>
                    </div>
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    </div>
                </div>
                </div>
                <div className='ic-pr-lp'>
                    <img src="https://laptopmall.pk/storage/media/G4pUDmmz2uqF4EbWvR5oJ1s1qLv8XCmriCVRMM5S.png" alt="" />
                    <div className='di-te'>
                    <div className='na-lp'>
                        <h6>Dell Latitude 7390 Core <br />i5 Laptop price in Khanewal</h6>
                    <p>PKR 68,000.00</p>
                    </div>
                      <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    </div>
                </div>
                </div>
                </div>
            </div>



            <div className="lp-pr-na-img-hp">
            <div className='pr-na-pr-2'><h6>HP Laptops Prices in <br />Pakistan</h6></div>
            <hr />
                <div>
            <div className='ic-pr-lp'>
            <img src="https://laptopmall.pk/storage/media/QMy7xOze4z2yYpjjv109Q7CO6QkYxI8TvZeUbt1i.jpg" alt="" />
                    <div className='di-te'>
                        <div className='na-lp'>
                        <h6>HP EliteBook 1040  <br />G3 Laptop Price in kh..</h6>
                    <p>PKR 68,000.00</p>
                    </div>
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    </div>
                </div>
                </div>
                <div className='ic-pr-lp'>
                <img src="https://laptopmall.pk/storage/media/gUfyNcjksCykbqSYT7bShdoC37eDTSPrMRlb1wGa.png" alt="" />
                    <div className='di-te'>
                        <div className='na-lp'>
                        <h6>HP EliteBook 840 G5 Core <br /> i5 Laptop Price in Pak..</h6>
                    <p>PKR 75,000.00</p>
                    </div>
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    </div>
                </div>
                </div>
                <div className='ic-pr-lp'>
                <img src="https://laptopmall.pk/storage/media/8lTRO2FN61aCLEaijBCNUzXWwhEJPz3GTrp61m4U.jpg" alt="" />
                    <div className='di-te'>
                        <div className='na-lp'>
                        <h6>HP EliteBook 840 G4 Core i5-<br />7th Generation Laptop Price..</h6>
                    <p>PKR 60,000.00</p>
                    </div>
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    </div>
                </div>
                </div>
                <div className='ic-pr-lp'>
                <img src="https://laptopmall.pk/storage/media/De5O8rm1gpXK1jyw8yxDcEySX7crBTnPYaQ1fZY4.jpg" alt="" />
                    <div className='di-te'>
                        <div className='na-lp'>
                        <h6>HP ProBook 450 G3 <br /> Laptop Price in...</h6>
                    <p>PKR 55,000.00</p>
                    </div>
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    </div>
                </div>
                </div>
                <div className='ic-pr-lp'>
                <img src="https://laptopmall.pk/storage/media/x9pqlcr3O8PemV5uCTGY8cNWpPBp53iG2Xy2yEyh.jpg" alt="" />
                    <div className='di-te'>
                        <div className='na-lp'>
                        <h6>HP ProBook 650 G2 Core <br /> i5 Laptop Price in Pak..</h6>
                    <p>PKR 56,000.00</p>
                    </div>
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    </div>
                </div>
                </div>
               
                </div>
            </div>
            <div className="lp-pr-na-img-len">
            <div className='pr-na-pr-3'><h6>Lenovo Laptops Prices in <br/ >Pakistan</h6></div>
                <hr />
            <div className='ic-pr-lp'>
            <img src="https://laptopmall.pk/storage/media/R6jaok8btubA5lAJf2Ota3LTp0Kq0DhIlyNyTfi8.png" alt="" />
                    <div className='di-te'>
                        <div className='na-lp'>
                        <h6>Lenovo ThinkPad T480s Core <br />i5-8th Generation Laptop Price..</h6>
                    <p>PKR 75,000.00</p>
                    </div>
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    </div>
                </div>
                </div>
                <div className='ic-pr-lp'>
                <img src="https://laptopmall.pk/storage/media/Ac797rbGH9s3qM6qRWXTnkc7zqakgokxX6tHgDgx.jpg" alt="" />
                    <div className='di-te'>
                        <div className='na-lp'>
                        <h6>Used Laptop Lenovo ThinkPad T470 <br />Core i5-6th Generation 8GB RAM 256GB..</h6>
                    <p>PKR 52,000.00</p>
                    </div>
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    </div>
                </div>
                </div>
                <div className='ic-pr-lp'>
                <img src="https://laptopmall.pk/storage/media/0Xpb9IagCyxnddgLtJccw8EovImmDNRSCebSYwmd.jpg" alt="" />
                    <div className='di-te'>
                        <div className='na-lp'>
                        <h6>Lenovo ThinkPad T460 Core<br /> i5 Laptop Price in Pakistan</h6>
                    <p>PKR 45,000.00</p>
                    </div>
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    </div>
                </div>
                </div>
                <div className='ic-pr-lp'>
                <img src="https://laptopmall.pk/storage/media/Ank9BIxmerE6jhY00d8XLfR8j025tbNqMYQDSccK.jpg" alt="" />
                    <div className='di-te'>
                        <div className='na-lp'>
                        <h6>Lenovo ThinkPad T450 Core<br /> i5-5th Generation Laptop Price..</h6>
                    <p>PKR 40,000.00</p>
                    </div>
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    </div>
                </div>
                </div>
                <div className='ic-pr-lp'>
                <img src="https://laptopmall.pk/storage/media/bdWLTCUFfxMD4jCM9LGyyplNdFwv8IfsmtxFekbF.jpg" alt="" />
                    <div className='di-te'>
                        <div className='na-lp'>
                        <h6>Lenovo ThinkPAD T440 Core<br /> i5-4th Laptop price..</h6>
                    <p>PKR 35,000.00</p>
                    </div>
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    </div>
                </div>
                </div>
    
                </div>
          </div>
        </div>

                <div className='lp-pr-ch-pk'>
                    <div className='lp-pr-ch-pk-content'>
                        <h6>Best Selling Laptops</h6>
                        <h6>Top 10 Laptops In Pakistan</h6>
                        <h6>Laptop Changer Prince In Pakistan</h6>
                        <h6>Laptop Bettery Prince In Pakistan</h6>
                    </div>
                    <div className='line-7'></div>
                </div>
                <hr />

                <div className='content-boxs'>
                    <div className='content-dis-box-2'>
                    <div className="box-1-lp-na-pr-ic bg-box-1">
                    <img src="https://laptopmall.pk/storage/media/Ld1JqsdU6z4rUHkuF2PNkOvv0VmGY1QaZ1R7tg40.jpg" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>Dell Latitude E7470 Laptop Price  in Pakistan</h6>
                    </div>
                    <div className='pr-lp-dl'>
                        <h6>PKR 52,500.00</h6>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-1'>
                        <div className='fo-icon-hc'>
                        <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>

                    </div>
                    <div className="box-1-lp-na-pr-ic bg-box-1 img-mt">
                    <img src="https://laptopmall.pk/storage/media/fbjQ4PYlbUi3v12Z3JhvalT7PibvkATZ08C6BDyD.jpg" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>Dell XPS 13 9365 Laptop Price in Pakistan</h6>
                    </div>
                    <div className='pr-lp-dl'>
                        <h6>PKR 115,00.00</h6>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-1 mt'>
                        <div className='fo-icon-hc'>
                        <FontAwesomeIcon icon={faHeart} />
                      
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>
                    <div className="box-1-lp-na-pr-ic bg-box-1 img-mt-5">
                    <img src="https://laptopmall.pk/storage/media/7EtqoqvKc4EoO3jPRxwIJIWYEKYEBlSqHbtiqxTV.jpg" alt="" />
                    <div className='icon-st-1'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (1)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>hp EliteBook 840 G3 Laptop Price in Pakistan</h6>
                    </div>
                    <div className='pr-lp-dl'>
                        <h6>PKR 55,000.00</h6>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-1 mt-5'>
                        <div className='fo-icon-hc'>
                        <FontAwesomeIcon icon={faHeart} />
                        
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>
                    <div className="box-1-lp-na-pr-ic bg-box-1">
                    <img src="https://laptopmall.pk/storage/media/alVvleg8JpH7bAfqxoZ43AAjBavmdNjSCReJNIXZ.jpg" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>HP EliteBook 830 G5 Laptop Price in Pakistan</h6>
                    </div>
                    <div className='pr-lp-dl'>
                        <h6>PKR 59,500.00</h6>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-1'>
                        <div className='fo-icon-hc'>
                        <FontAwesomeIcon icon={faHeart} />
                       
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>
                    <div className="box-1-lp-na-pr-ic bg-box-1">
                    <img src="https://laptopmall.pk/storage/media/bg8uyhaAyXRU6f3icPh9R4gtZKgdi1JyqSP2sTBr.png" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>Dell Latitude 7490 Core i7 8th Gen Laptop price in Pakistan</h6>
                    </div>
                    <div className='pr-lp-dl'>
                        <h6>PKR 80,500.00</h6>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-1'>
                        <div className='fo-icon-hc'>
                        <FontAwesomeIcon icon={faHeart} />
                        
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>
                    <div className="box-1-lp-na-pr-ic bg-box-1">
                    <img src="https://laptopmall.pk/storage/media/k24qnDUTdO5tZaNThoonbnts5Gk78N00JKgLFakW.jpg" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>Dell Latitude 7480 Core i5-6th Generation Laptop Price in Pakistan</h6>
                    </div>
                    <div className='pr-lp-dl'>
                        <h6>PKR 50,000.00</h6>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-1'>
                        <div className='fo-icon-hc'>
                        <FontAwesomeIcon icon={faHeart} />
                        
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>
                    <div className="box-1-lp-na-pr-ic bg-box-1">
                    <img src="https://laptopmall.pk/storage/media/Ac797rbGH9s3qM6qRWXTnkc7zqakgokxX6tHgDgx.jpg" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>Used Laptop Lenovo ThinkPad T470 Core i5-6th Generation 8GB RAM 256GB SSD Windows 10</h6>
                    </div>
                    <div className='pr-lp-dl'>
                        <h6>PKR 52,000.00</h6>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-1'>
                        <div className='fo-icon-hc'>
                        <FontAwesomeIcon icon={faHeart} />
                        
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>
                    <div className="box-1-lp-na-pr-ic bg-box-1">
                    <img src="https://laptopmall.pk/storage/media/R6jaok8btubA5lAJf2Ota3LTp0Kq0DhIlyNyTfi8.png" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>Lenovo ThinkPad T480s Core i5-8th Generation Laptop Price in Pakistan</h6>
                    </div>
                    <div className='pr-lp-dl'>
                        <h6>PKR 75,000.00</h6>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-1'>
                        <div className='fo-icon-hc'>
                        <FontAwesomeIcon icon={faHeart} />
                        
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>
                    <div className="box-1-lp-na-pr-ic bg-box-1">
                    <img src="https://laptopmall.pk/storage/media/De5O8rm1gpXK1jyw8yxDcEySX7crBTnPYaQ1fZY4.jpg" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>HP ProBook 450 G3 Laptop Price in Pakistan</h6>
                    </div>
                    <div className='pr-lp-dl'>
                        <h6>PKR 55,000.00</h6>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-1'>
                        <div className='fo-icon-hc'>
                        <FontAwesomeIcon icon={faHeart} />
                        
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>
                    <div className="box-1-lp-na-pr-ic bg-box-1">
                    <img src="https://laptopmall.pk/storage/media/EaswRK3vhO1ldQFStFMLf7ob2A5BeU1tKr2ARvNc.jpg" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>Dell Latitude 7490 Core i7 8th Gen Laptop price in Pakistan</h6>
                    </div>
                    <div className='pr-lp-dl'>
                        <h6>PKR 55,500.00</h6>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-1'>
                        <div className='fo-icon-hc'>
                        <FontAwesomeIcon icon={faHeart} />
                        
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>
                    </div>
                </div>


                <div className='na-pr-fiv'>
                    <div className='fiv-content'>
                        <div className="bix-f-1">
                            <div>
                                <h5>Laptop Price In Pakistan</h5>
                            </div>
                        </div>
                        <div className="bix-f-2">
                            <div className='bix-h-6'>
                                <h6>Used Laptop In Pakistan</h6>
                                <h6>Dell Laptop Price In Pakistan</h6>
                                <h6>PH Laptop Price In Pakistan</h6>
                                <h6>Lenvovo Laptop Price In Pakistan</h6>
                            </div>
                        </div>
                    </div>
                </div>






                <div className='content-boxs'>
                    <div className='content-dis-box-3'>
                    <div className="box-1-lp-na-pr-ic bg-box-2">
                       <div className='heading'>
                    <img src="https://laptopmall.pk/storage/media/mGj012LdKgCOOOosYl76qxNdSyxmMN445DuvMsAT.jpg" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                   
                    <div className='na-lp-dl'>
                        <h6>Dell Precision 7720 Core i7 Laptop Price in Pakistan</h6>
                    </div>
                    <div className='pr-lp-dl-1'>
                        <h6>PKR 165,000.00</h6>
                    </div>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-2 b-1'>
                        <div className='fo-icon-hc-1'>
                        <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon-1'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>

                    </div>
                    <div className="box-1-lp-na-pr-ic bg-box-2 img-mt">
                    <img src="https://laptopmall.pk/storage/media/fCwy9GFnbhozXnNYnXCyp8kYhVz64WXwFZYedhu6.jpg" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>Apple MacBook Pro 2015 Price In Pakistan</h6>
                    </div>
                    <div className='pr-lp-dl-1'>
                        <h6>PKR 135,000.00</h6>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-2 mt'>
                        <div className='fo-icon-hc-1'>
                        <FontAwesomeIcon icon={faHeart} />
                      
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon-1'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>
                    <div className="box-1-lp-na-pr-ic bg-box-2 img-mt-5">
                    <img src="https://laptopmall.pk/storage/media/6sfyyDDSVk4U0GJGcDYt4xYTfh2Fi363oCdfRo4b.jpg" alt="" />
                    <div className='icon-st-1'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (1)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>Dell XPS 9370 Laptop Price in Pakistan</h6>
                    </div>
                    <div className='pr-lp-dl-1'>
                        <h6>PKR 115,000.00</h6>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-2 mt-5'>
                        <div className='fo-icon-hc-1'>
                        <FontAwesomeIcon icon={faHeart} />
                        
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon-1'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>
                    <div className="box-1-lp-na-pr-ic bg-box-2">
                    <div className='heading'>
                    <img src="https://laptopmall.pk/storage/media/fbjQ4PYlbUi3v12Z3JhvalT7PibvkATZ08C6BDyD.jpg" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='im-t-5'>
                    <div className='na-lp-dl'>
                        <h6>Dell XPS 13 9365 Laptop Price in Pakistan</h6>
                    </div>
                    <div className='pr-lp-dl-1'>
                        <h6>PKR 115,500.00</h6>
                    </div>
                    </div>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-2'>
                        <div className='fo-icon-hc-1'>
                        <FontAwesomeIcon icon={faHeart} />
                       
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon-1'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>
                    <div className="box-1-lp-na-pr-ic bg-box-2">
                    <div className='heading'>
                    <img src="https://laptopmall.pk/storage/media/EaswRK3vhO1ldQFStFMLf7ob2A5BeU1tKr2ARvNc.jpg" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>Dell Latitude 3570 Laptop price in Pakistan</h6>
                    </div>
                    <div className='pr-lp-dl-1'>
                        <h6>PKR 55,000.00</h6>
                    </div>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-2'>
                        <div className='fo-icon-hc-1'>
                        <FontAwesomeIcon icon={faHeart} />
                        
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon-1'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>
                    <div className="box-1-lp-na-pr-ic bg-box-2 img-bt">
                    <img src="https://laptopmall.pk/storage/media/IK28gPjQKMawTtFJnlQtVZjfaLT05oullXaGDqhV.jpg" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>Dell Precision M2800 Workstation Laptop Price in Khanewal</h6>
                    </div>
                    <div className='pr-lp-dl-1'>
                        <h6>PKR 52,000.00</h6>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-2'>
                        <div className='fo-icon-hc-1'>
                        <FontAwesomeIcon icon={faHeart} />
                        
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon-1'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>
                    <div className="box-1-lp-na-pr-ic bg-box-2">
                    <div className='heading-1'>
                    <img src="https://laptopmall.pk/storage/media/Ac797rbGH9s3qM6qRWXTnkc7zqakgokxX6tHgDgx.jpg" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>Used Laptop Lenovo ThinkPad T470 Core i5-6th Generation 8GB RAM 256GB SSD Windows 10</h6>
                    </div>
                    <div className='pr-lp-dl-1'>
                        <h6>PKR 52,000.00</h6>
                    </div>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-2'>
                        <div className='fo-icon-hc-1'>
                        <FontAwesomeIcon icon={faHeart} />
                        
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon-1'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>
                    <div className="box-1-lp-na-pr-ic bg-box-2  img-bt-1">
                    <img src="https://laptopmall.pk/storage/media/Ld1JqsdU6z4rUHkuF2PNkOvv0VmGY1QaZ1R7tg40.jpg" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>Dell Latitude E7470 Laptop Price in Pakistan</h6>
                    </div>
                    <div className='pr-lp-dl-1'>
                        <h6>PKR 55,000.00</h6>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-2'>
                        <div className='fo-icon-hc-1'>
                        <FontAwesomeIcon icon={faHeart} />
                        
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon-1'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>
                    <div className="box-1-lp-na-pr-ic bg-box-2">
                    <div className='heading-3'>
                    <img src="https://laptopmall.pk/storage/media/MW0Ub3oVr5fRpo0ZSAwRVzfQANH7Xlt3peNCmoow.jpg" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>ZBook HP 15 G1 Workstation Laptop Price in Pakistan</h6>
                    </div>
                    <div className='pr-lp-dl-1'>
                        <h6>PKR 55,000.00</h6>
                    </div>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-2'>
                        <div className='fo-icon-hc-1'>
                        <FontAwesomeIcon icon={faHeart} />
                        
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon-1'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>
                    <div className="box-1-lp-na-pr-ic bg-box-2">
                    <div className='heading-2'>
                    <img src="https://laptopmall.pk/storage/media/De5O8rm1gpXK1jyw8yxDcEySX7crBTnPYaQ1fZY4.jpg" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>HP ProBook 450 G3 Laptop Price in Pakistan</h6>
                    </div>
                    </div>
                    <div className='pr-lp-dl-1'>
                        <h6>PKR 55,000.00</h6>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-2'>
                        <div className='fo-icon-hc-1'>
                        <FontAwesomeIcon icon={faHeart} />
                        
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon-1'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>
                    <div className="box-1-lp-na-pr-ic bg-box-2">
                        <div className='heading'>
                    <img src="https://laptopmall.pk/storage/media/7EtqoqvKc4EoO3jPRxwIJIWYEKYEBlSqHbtiqxTV.jpg" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>hp EliteBook 840 G3 Laptop Price in Pakistan</h6>
                    </div>
                    <div className='pr-lp-dl-1'>
                        <h6>PKR 55,000.00</h6>
                    </div>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-2'>
                        <div className='fo-icon-hc-1'>
                        <FontAwesomeIcon icon={faHeart} />
                        
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon-1'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>

                    <div className="box-1-lp-na-pr-ic bg-box-2">
                    <div className='heading-4'>
                    <img src="https://laptopmall.pk/storage/media/es3utuYoENp66Mi9xqANDRV0SrsoSoaphlBPVgla.jpg" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>Dell Precision 7720 Workstation Laptop Price in Pakistan</h6>
                    </div>
                    <div className='pr-lp-dl-1'>
                        <h6>PKR 125,000.00</h6>
                        </div>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-2'>
                        <div className='fo-icon-hc-1'>
                        <FontAwesomeIcon icon={faHeart} />
                        
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon-1'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>

                    <div className="box-1-lp-na-pr-ic bg-box-2">
                    <img src="https://laptopmall.pk/storage/media/QD6MgSAomckavwSCkYTXs6wm4y8b1UXkKFQqujYZ.jpg" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>Dell Precision M4800 Workstation Laptop Price in Pakistan</h6>
                    </div>
                    <div className='pr-lp-dl-1'>
                        <h6>PKR 58,000.00</h6>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-2'>
                        <div className='fo-icon-hc-1'>
                        <FontAwesomeIcon icon={faHeart} />
                        
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon-1'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>

                    <div className="box-1-lp-na-pr-ic bg-box-2">
                        
                    <img src="https://laptopmall.pk/storage/media/alVvleg8JpH7bAfqxoZ43AAjBavmdNjSCReJNIXZ.jpg" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>HP EliteBook 830 G5 Laptop Price in Pakistan</h6>
                    </div>
                    <div className='pr-lp-dl-1'>
                        <h6>PKR 69,500.00</h6>
                    </div>
                    
                    <div className='line-8'></div>
                    <div className='bt-box-2'>
                        <div className='fo-icon-hc-1'>
                        <FontAwesomeIcon icon={faHeart} />
                        
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon-1'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>

                    <div className="box-1-lp-na-pr-ic bg-box-2">
                    <div className='heading-5'>
                    <img src="https://laptopmall.pk/storage/media/bsN7JE6fRtt8snTDgEii7GoDklHEDbRuekbge19D.jpg" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>Dell Latitude 5289 Core i7 Used Laptop Price in Pakistan</h6>
                    </div>
                    <div className='pr-lp-dl-1'>
                        <h6>PKR 70,000.00</h6>
                    </div>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-2'>
                        <div className='fo-icon-hc-1  bt-b' >
                        <FontAwesomeIcon icon={faHeart} />
                        
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon-1'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>

                    <div className="box-1-lp-na-pr-ic bg-box-2 img-bt-2">
                        
                    <img src="https://laptopmall.pk/storage/media/chD2waCzaxTGJqfUQtBdrk4kmwpjNwZc0ixkX1nG.jpg" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>Dell Latitude E5580 Core i7 Used Laptop Price in Pakistan</h6>
                    </div>
                    <div className='pr-lp-dl-1'>
                        <h6>PKR 75,000.00</h6>
                    </div>
                   
                    <div className='line-8'></div>
                    <div className='bt-box-2'>
                        <div className='fo-icon-hc-1'>
                        <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon-1'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>

                    <div className="box-1-lp-na-pr-ic bg-box-2">
                        <div className='heading-6'>
                    <img src="https://laptopmall.pk/storage/media/PYUJ7RQpfMvjzpFgq5dqXwCbtq8IPGHQCp0mbEcd.jpg" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>Dell Latitude 7480 Core i7 Used Laptop Price in Pakistan</h6>
                    </div>
                    <div className='pr-lp-dl-1'>
                        <h6>PKR 67,500.00</h6>
                    </div>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-2'>
                        <div className='fo-icon-hc-1'>
                        <FontAwesomeIcon icon={faHeart} />
                        
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon-1'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>

                    <div className="box-1-lp-na-pr-ic bg-box-2">
                    <img src="https://laptopmall.pk/storage/media/vRYjAAEqrAzdXBtwG3UMJVxlmOExHAoBWDTb3J0O.jpg" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>HP Probook 450 G1 Core i5 Used Laptop Price in Pakistan</h6>
                    </div>
                    <div className='pr-lp-dl-1'>
                        <h6>PKR 40,000.00</h6>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-2'>
                        <div className='fo-icon-hc-1'>
                        <FontAwesomeIcon icon={faHeart} />
                        
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon-1'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>

                    <div className="box-1-lp-na-pr-ic bg-box-2">
                    <img src="https://laptopmall.pk/storage/media/vRYjAAEqrAzdXBtwG3UMJVxlmOExHAoBWDTb3J0O.jpg" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>HP ProBook 450 G1 Core i3 Used Laptop Price in Pakistan</h6>
                    </div>
                    <div className='pr-lp-dl-1'>
                        <h6>PKR 32,500.00</h6>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-2'>
                        <div className='fo-icon-hc-1'>
                        <FontAwesomeIcon icon={faHeart} />
                        
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon-1'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>

                    <div className="box-1-lp-na-pr-ic bg-box-2">
                    <div className='heading-7'>
                    <img src="https://laptopmall.pk/storage/media/waxpimuJaxhVsx6MoFMnq6hNDkNOEsDQaP3K5Eev.jpg" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>HP ProBook 750 G1 Core i5 Laptop Price in Pakistan</h6>
                    </div>
                    <div className='pr-lp-dl-1'>
                        <h6>PKR 38,500.00</h6>
                    </div>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-2'>
                        <div className='fo-icon-hc-1'>
                        <FontAwesomeIcon icon={faHeart} />
                        
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon-1'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>

                    <div className="box-1-lp-na-pr-ic bg-box-2">
                    <div className='heading-8'>
                    <img src="https://laptopmall.pk/storage/media/azPcsWE8PlfqkZkYRVlXdZ9I0BJu7mwpBGPm8Fzf.jpg" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>HP EliteBook 840 G1 Core i5 Used Laptop price in Pakistan</h6>
                    </div>
                    <div className='pr-lp-dl-1'>
                        <h6>PKR 38,500.00</h6>
                    </div>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-2'>
                        <div className='fo-icon-hc-1'>
                        <FontAwesomeIcon icon={faHeart} />
                        
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon-1'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>

                    <div className="box-1-lp-na-pr-ic bg-box-2">
                    <div className='heading-9'>
                    <img src="https://laptopmall.pk/storage/media/4Q8zv0p8RntyzJfGrK8TASxJsXh53yz1eAIVWQes.jpg" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>HP EliteBook 840 G1 Core i3 Used Laptop price in Pakistan</h6>
                    </div>
                    <div className='pr-lp-dl-1'>
                        <h6>PKR 33,500.00</h6>
                    </div>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-2'>
                        <div className='fo-icon-hc-1'>
                        <FontAwesomeIcon icon={faHeart} />
                        
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon-1'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>

                    <div className="box-1-lp-na-pr-ic bg-box-2">
                    <img src="https://laptopmall.pk/storage/media/zvxdsUfyERi7ipe8Edkf2kMu71UyerQwwlg0HHGT.jpg" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>HP EliteBook 840 G1 Core i7 Used Laptop price in Pakistan</h6>
                    </div>
                    <div className='pr-lp-dl-1'>
                        <h6>PKR 45,500.00</h6>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-2'>
                        <div className='fo-icon-hc-1'>
                        <FontAwesomeIcon icon={faHeart} />
                        
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon-1'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>

                    <div className="box-1-lp-na-pr-ic bg-box-2">
                    <div className='heading-9'>
                    <img src="https://laptopmall.pk/storage/media/z7xdNXpsReLjm63kCoLgj91GSAsV71zl3j0GpkTu.jpg" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>HP EliteBook 840 G2 Core i5 Used Laptop price in Pakistan</h6>
                    </div>
                    <div className='pr-lp-dl-1'>
                        <h6>PKR 45,000.00</h6>
                    </div>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-2'>
                        <div className='fo-icon-hc-1'>
                        <FontAwesomeIcon icon={faHeart} />
                        
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon-1'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>

                    <div className="box-1-lp-na-pr-ic bg-box-2 mg-bt-3">
                    <img src="https://laptopmall.pk/storage/media/I7RTX6G9Jn99iBqPFssRUYzS9Jgv1Bc7we6Tqqs4.jpg" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>Dell Latitude E5450 Core i5 Laptop Price in Pakistan</h6>
                    </div>
                    <div className='pr-lp-dl-1'>
                        <h6>PKR 42,000.00</h6>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-2 '>
                        <div className='fo-icon-hc-1 bt-b-1'>
                        <FontAwesomeIcon icon={faHeart} />
                        
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon-1'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>

                    <div className="box-1-lp-na-pr-ic bg-box-2 mg-bt-3">
                    <img src="https://laptopmall.pk/storage/media/0JUCEO9P3WG9xQGiBV3tFk4EdwxeiBFEYQ3dcjA5.jpg" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>Dell Latitude E5450 Core i3 Laptop Price in Pakistan</h6>
                    </div>
                    <div className='pr-lp-dl-1'>
                        <h6>PKR 35,000.00</h6>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-2'>
                        <div className='fo-icon-hc-1 bt-b-2'>
                        <FontAwesomeIcon icon={faHeart} />
                        
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon-1'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>

                    <div className="box-1-lp-na-pr-ic bg-box-2 mg-bt-1">
                        <div className='heading-6'>
                    <img src="https://laptopmall.pk/storage/media/BeO2JjRmgg0cUZ0la75mJO4YAYfeSzfnE9zPJpXn.jpg" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>Apple Macbook Pro 2011 Price in Khanewal</h6>
                    </div>
                    <div className='pr-lp-dl-1'>
                        <h6>PKR 35,000.00</h6>
                    </div>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-2'>
                        <div className='fo-icon-hc-1'>
                        <FontAwesomeIcon icon={faHeart} />
                        
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon-1'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>

                    <div className="box-1-lp-na-pr-ic bg-box-2">
                    <div className='heading-10'>
                    <img src="https://laptopmall.pk/storage/media/e1VttF5VXKGHgPO7g5D5Xt4aw3UAefGnFeoAAOOH.jpg" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>Dell Latitude E6430 Laptop Price in Khanewal</h6>
                    </div>
                    <div className='pr-lp-dl-1'>
                        <h6>PKR 28,500.00</h6>
                    </div>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-2'>
                        <div className='fo-icon-hc-1'>
                        <FontAwesomeIcon icon={faHeart} />
                        
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon-1'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>

                    <div className="box-1-lp-na-pr-ic bg-box-2 mg-bt-3">
                    <img src="https://laptopmall.pk/storage/media/QMy7xOze4z2yYpjjv109Q7CO6QkYxI8TvZeUbt1i.jpg" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>HP EliteBook 1040 G3 Laptop Price in Khanewal</h6>
                    </div>
                    <div className='pr-lp-dl-1'>
                        <h6>PKR 68,000.00</h6>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-2'>
                        <div className='fo-icon-hc-1'>
                        <FontAwesomeIcon icon={faHeart} />
                        
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon-1'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>

                    <div className="box-1-lp-na-pr-ic bg-box-2 mg-bt-3">
                    <img src="https://laptopmall.pk/storage/media/YwR0SAUwqsvQRHN9NSKSHTtZTZWx3BC1ThHokqdi.jpg" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>Apple MacBook Air 2014 Core i5 Laptop Price in Pakistan</h6>
                    </div>
                    <div className='pr-lp-dl-1'>
                        <h6>PKR 62,000.00</h6>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-2'>
                        <div className='fo-icon-hc-1'>
                        <FontAwesomeIcon icon={faHeart} />
                        
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon-1'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>

                    <div className="box-1-lp-na-pr-ic bg-box-2">
                        <div className='heading-11'>
                    <img src="https://laptopmall.pk/storage/media/Gaury9HVBnzWbCdv7aGCACo7LMN4CulXZXeQ43Zq.jpg" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>Dell Latitude 5490 Core i5 Laptop Price in Khanewal</h6>
                    </div>
                    <div className='pr-lp-dl-1'>
                        <h6>PKR 55,000.00</h6>
                    </div>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-2'>
                        <div className='fo-icon-hc-1'>
                        <FontAwesomeIcon icon={faHeart} />
                        
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon-1'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>

                    <div className="box-1-lp-na-pr-ic bg-box-2">
                    <div className='heading-11'>
                    <img src="https://laptopmall.pk/storage/media/IjZU7HUY5JIaS10Ini9RY4baIsd2GN57qKwABZNu.jpg" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>Dell Latitude E7280 Core i7 Laptop Price in Khaneal</h6>
                    </div>
                    <div className='pr-lp-dl-1'>
                        <h6>PKR 60,000.00</h6>
                    </div>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-2'>
                        <div className='fo-icon-hc-1'>
                        <FontAwesomeIcon icon={faHeart} />
                        
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon-1'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>

                    <div className="box-1-lp-na-pr-ic bg-box-2">
                    <div className='heading-12'>
                    <img src="https://laptopmall.pk/storage/media/G4pUDmmz2uqF4EbWvR5oJ1s1qLv8XCmriCVRMM5S.png" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>Dell Latitude 7390 Core i5 Laptop price in Khanewal</h6>
                    </div>
                    <div className='pr-lp-dl-1'>
                        <h6>PKR 68,000.00</h6>
                    </div>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-2'>
                        <div className='fo-icon-hc-1'>
                        <FontAwesomeIcon icon={faHeart} />
                        
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon-1'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>

                    <div className="box-1-lp-na-pr-ic bg-box-2">
                    <div className='heading-12'>
                    <img src="https://laptopmall.pk/storage/media/VD1gvQviw1qVteXW9jWNxK4dKjG5gYEj65hD6PPl.jpg" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>Dell Latitude 7390 Core i7 Laptop Price in Pakistan</h6>
                    </div>
                    <div className='pr-lp-dl-1'>
                        <h6>PKR 80,000.00</h6>
                        </div>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-2'>
                        <div className='fo-icon-hc-1'>
                        <FontAwesomeIcon icon={faHeart} />
                        
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon-1'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>

                    <div className="box-1-lp-na-pr-ic bg-box-2">
                        <div className='heading-6'>
                    <img src="https://laptopmall.pk/storage/media/Moq5LTZr0RJztHz2QT5oU6QlF3kqBSep1BcM96G1.jpg" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>Dell Latitude E7480 Core i5 Laptop price in Khanewal</h6>
                    </div>
                    <div className='pr-lp-dl-1'>
                        <h6>PKR 55,000.00</h6>
                    </div>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-2'>
                        <div className='fo-icon-hc-1'>
                        <FontAwesomeIcon icon={faHeart} />
                        
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon-1'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>

                    <div className="box-1-lp-na-pr-ic bg-box-2">
                    <img src="https://laptopmall.pk/storage/media/k24qnDUTdO5tZaNThoonbnts5Gk78N00JKgLFakW.jpg" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>Dell Latitude 7480 Core i5-6th Generation Laptop Price,</h6>
                    </div>
                    <div className='pr-lp-dl-1'>
                        <h6>PKR 50,000.00</h6>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-2'>
                        <div className='fo-icon-hc-1'>
                        <FontAwesomeIcon icon={faHeart} />
                        
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon-1'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>

                    <div className="box-1-lp-na-pr-ic bg-box-2">
                    <img src="https://laptopmall.pk/storage/media/bg8uyhaAyXRU6f3icPh9R4gtZKgdi1JyqSP2sTBr.png" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>Dell Latitude 7490 Core i7 8th Gen Laptop price in Pakistan</h6>
                    </div>
                    <div className='pr-lp-dl-1'>
                        <h6>PKR 80,000.00</h6>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-2'>
                        <div className='fo-icon-hc-1'>
                        <FontAwesomeIcon icon={faHeart} />
                        
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon-1'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>

                    <div className="box-1-lp-na-pr-ic bg-box-2">
                    <img src="https://laptopmall.pk/storage/media/FQ28BEhJLadd8Efrdw03fnGym6v7QggZwvFFcL87.jpg" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>Dell Precision 7720 Core i7 7th Generation Laptop Price in Pakistan</h6>
                    </div>
                    <div className='pr-lp-dl-1'>
                        <h6>PKR 150,000.00</h6>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-2'>
                        <div className='fo-icon-hc-1'>
                        <FontAwesomeIcon icon={faHeart} />
                        
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon-1'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>

                    <div className="box-1-lp-na-pr-ic bg-box-2">
                        <div className='heading-6'>
                    <img src="https://laptopmall.pk/storage/media/t51GhsnC2tinCqP2QLgnLv2AOdLB6oClzqdEgA4d.jpg" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>Dell Latitude E6420 Core i5 Laptop Price in Rawalpindi</h6>
                    </div>
                    <div className='pr-lp-dl-1'>
                        <h6>PKR 25,000.00</h6>
                    </div>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-2'>
                        <div className='fo-icon-hc-1'>
                        <FontAwesomeIcon icon={faHeart} />
                        
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon-1'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>

                    <div className="box-1-lp-na-pr-ic bg-box-2">
                    <img src="https://laptopmall.pk/storage/media/ohSfYQJZ798hukbBTmppd6vV5GLrvJbDLvJ102c2.jpg" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>HP EliteBook 8460p Core i7-2nd Gen Laptop Price in Pakistan</h6>
                    </div>
                    <div className='pr-lp-dl-1'>
                        <h6>PKR 30,500.00</h6>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-2'>
                        <div className='fo-icon-hc-1'>
                        <FontAwesomeIcon icon={faHeart} />
                        
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon-1'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>

                    <div className="box-1-lp-na-pr-ic bg-box-2">
                    <div className='heading-13'>
                    <img src="https://laptopmall.pk/storage/media/iZawO5GLcsehm3zy8xueef0VWl55GyS9DsfscI97.jpg" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>Dell Latitude 7480 Core i5-6th Generation Laptop Price,</h6>
                    </div>
                    <div className='pr-lp-dl-1'>
                        <h6>PKR 27,500.00</h6>
                    </div>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-2'>
                        <div className='fo-icon-hc-1'>
                        <FontAwesomeIcon icon={faHeart} />
                        
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon-1'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>

                    <div className="box-1-lp-na-pr-ic bg-box-2">
                        <div className='heading-12'>
                    <img src="https://laptopmall.pk/storage/media/IQi8k5saqjpBoEjYFG70NmyWdn4bQRxv4lOLnJLc.jpg" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>HP EliteBook Folio 9470 Cire i5 Laptop Price In...</h6>
                    </div>
                    <div className='pr-lp-dl-1'>
                        <h6>PKR 30,000.00</h6>
                    </div>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-2'>
                        <div className='fo-icon-hc-1'>
                        <FontAwesomeIcon icon={faHeart} />
                        
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon-1'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>

                    <div className="box-1-lp-na-pr-ic bg-box-2">
                    <img src="https://laptopmall.pk/storage/media/ZVMqfCnbIxVbNRYgbeIHfCED8uP2ATH2B3i97EBs.jpg" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>Used Lenovo ThinkPad T430s Core i5-3rd Generation Laptop price..</h6>
                    </div>
                    <div className='pr-lp-dl-1'>
                        <h6>PKR 28,000.00</h6>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-2'>
                        <div className='fo-icon-hc-1'>
                        <FontAwesomeIcon icon={faHeart} />
                        
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon-1'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>

                    <div className="box-1-lp-na-pr-ic bg-box-2">
                        <div className='heading-14'>
                    <img src="https://laptopmall.pk/storage/media/e7RkJ3pPKCTnCm79Rc0vUrFgkQmuWkXeSUSA4i81.jpg" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>Lenovo ThinkPad T430s Core i7 Laptop Price in Pakistan</h6>
                    </div>
                    <div className='pr-lp-dl-1'>
                        <h6>PKR 35,000.00</h6>
                    </div>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-2'>
                        <div className='fo-icon-hc-1'>
                        <FontAwesomeIcon icon={faHeart} />
                        
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon-1'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>

                    <div className="box-1-lp-na-pr-ic bg-box-2">
                    <img src="https://laptopmall.pk/storage/media/Ajps3oyZQP0DiTACXFZGI4F3AXOvMzWfmuxQBeEl.jpg" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>Used HP EliteBook Folio 9480M Core i5 Laptop Price..</h6>
                    </div>
                    <div className='pr-lp-dl-1'>
                        <h6>PKR 38,000.00</h6>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-2'>
                        <div className='fo-icon-hc-1'>
                        <FontAwesomeIcon icon={faHeart} />
                        
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon-1'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>

                    <div className="box-1-lp-na-pr-ic bg-box-2">
                    <div className='heading-14'>
                    <img src="https://laptopmall.pk/storage/media/YEu9DnwFf8LOb102ZJ3f8GgH97WxTz8l9EHHLIM1.jpg" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>Lenovo ThinkPAD T440s Core i7-4th Generation Laptop..</h6>
                    </div>
                    <div className='pr-lp-dl-1'>
                        <h6>PKR 42,000.00</h6>
                    </div>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-2'>
                        <div className='fo-icon-hc-1'>
                        <FontAwesomeIcon icon={faHeart} />
                        
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon-1'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>

                    <div className="box-1-lp-na-pr-ic bg-box-2">
                    <div className='heading-6'>
                    <img src="https://laptopmall.pk/storage/media/CUvNb7Lr7Vlbzxbq4CqtxmHRBU2IkEnNCtvmTQVK.jpg" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>Lenovo ThinkPAD T410 Core i5 Laptop Price in Khanewal</h6>
                    </div>
                    <div className='pr-lp-dl-1'>
                        <h6>PKR 20,000.00</h6>
                    </div>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-2'>
                        <div className='fo-icon-hc-1'>
                        <FontAwesomeIcon icon={faHeart} />
                        
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon-1'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>

                    <div className="box-1-lp-na-pr-ic bg-box-2 img-bt-3">
                    <img src="https://laptopmall.pk/storage/media/ftzCPkGTotvE11J2QqMbZJxAQQenOXlv2axAcSSK.jpg" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>Dell Latitude E6410 Core i5 Laptop Price in Khanewal</h6>
                    </div>
                    <div className='pr-lp-dl-1'>
                        <h6>PKR 21,500.00</h6>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-2'>
                        <div className='fo-icon-hc-1'>
                        <FontAwesomeIcon icon={faHeart} />
                        
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon-1'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>

                    <div className="box-1-lp-na-pr-ic bg-box-2">
                        <div className='heading-6'>
                    <img src="https://laptopmall.pk/storage/media/vf4l3j8PsOVphCPYKGO0kLIJXPJiO7XKksBpe9K1.jpg" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>Dell Latitude 7480 Core i5-6th Generation Laptop Price,</h6>
                    </div>
                    <div className='pr-lp-dl-1'>
                        <h6>PKR 22,500.00</h6>
                    </div>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-2'>
                        <div className='fo-icon-hc-1'>
                        <FontAwesomeIcon icon={faHeart} />
                        
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon-1'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>

                    <div className="box-1-lp-na-pr-ic bg-box-2">
                    <img src="https://laptopmall.pk/storage/media/k24qnDUTdO5tZaNThoonbnts5Gk78N00JKgLFakW.jpg" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>HP EliteBook 8440p Core i5 Laptop Price in Pakistan</h6>
                    </div>
                    <div className='pr-lp-dl-1'>
                        <h6>PKR 50,000.00</h6>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-2'>
                        <div className='fo-icon-hc-1'>
                        <FontAwesomeIcon icon={faHeart} />
                        
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon-1'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>

                    <div className="box-1-lp-na-pr-ic bg-box-2">
                    <div className='heading-15'>
                    <img src="https://laptopmall.pk/storage/media/EeuNPBR1Cvnw73lPbGyCHiE6ly6Iz782T1wXyDIw.jpg" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>Lenovo ThinkPad T420 Laptop Price in Pakistan</h6>
                    </div>
                    <div className='pr-lp-dl-1'>
                        <h6>PKR 23,000.00</h6>
                    </div>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-2'>
                        <div className='fo-icon-hc-1'>
                        <FontAwesomeIcon icon={faHeart} />
                        
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon-1'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>

                    <div className="box-1-lp-na-pr-ic bg-box-2">
                    <div className='heading-6'>
                    <img src="https://laptopmall.pk/storage/media/2m1ZSZPTDHcQbbsN8hSRUHqomcLtlN46jHE8WUEs.jpg" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>Used Dell Latitude E5420 Core i5 Laptop Price in Khanewal</h6>
                    </div>
                    <div className='pr-lp-dl-1'>
                        <h6>PKR 23,000.00</h6>
                    </div>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-2'>
                        <div className='fo-icon-hc-1'>
                        <FontAwesomeIcon icon={faHeart} />
                        
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon-1'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>

                    <div className="box-1-lp-na-pr-ic bg-box-2">
                    <div className='heading-11'>
                    <img src="https://laptopmall.pk/storage/media/6ecRbBytXIuGF5BZvywuRKHD0GOpnm3YUGxIQ3Lt.jpg" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>Used Laptop Dell Latitude E5430 Core i5 Laptop Price..</h6>
                    </div>
                    <div className='pr-lp-dl-1'>
                        <h6>PKR 25,000.00</h6>
                        </div>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-2'>
                        <div className='fo-icon-hc-1'>
                        <FontAwesomeIcon icon={faHeart} />
                        
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon-1'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>

                    <div className="box-1-lp-na-pr-ic bg-box-2">
                    <img src="https://laptopmall.pk/storage/media/AAIlNHjyC4XCa68xXlIg20rR6KHCibDj8Rj5ChQk.jpg" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>HP EliteBook 8470p Core i5-3rd Gen Laptop Price...</h6>
                    </div>
                    <div className='pr-lp-dl-1'>
                        <h6>PKR 27,500.00</h6>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-2'>
                        <div className='fo-icon-hc-1'>
                        <FontAwesomeIcon icon={faHeart} />
                        
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon-1'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>

                    <div className="box-1-lp-na-pr-ic bg-box-2">
                        <div className='heading-6'>
                    <img src="https://laptopmall.pk/storage/media/bdWLTCUFfxMD4jCM9LGyyplNdFwv8IfsmtxFekbF.jpg" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>Lenovo ThinkPAD T440 Core i5-4th Laptop price..</h6>
                    </div>
                    <div className='pr-lp-dl-1'>
                        <h6>PKR 35,000.00</h6>
                        </div>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-2'>
                        <div className='fo-icon-hc-1'>
                        <FontAwesomeIcon icon={faHeart} />
                        
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon-1'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>

                    <div className="box-1-lp-na-pr-ic bg-box-2">
                    <img src="https://laptopmall.pk/storage/media/BMuPLTiXNprreCnxnOVqlejqwmsDxUwW5GDQDkCn.jpg" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>Dell Latitude E6440 Core i5 Laptop price in Khanewal</h6>
                    </div>
                    <div className='pr-lp-dl-1'>
                        <h6>PKR 34,000.00</h6>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-2'>
                        <div className='fo-icon-hc-1'>
                        <FontAwesomeIcon icon={faHeart} />
                        
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon-1'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>

                    <div className="box-1-lp-na-pr-ic bg-box-2">
                    <img src="https://laptopmall.pk/storage/media/X189zwp4Q5U135KDnjpUsT3lt5xUj8kqetnkDrXO.jpg" alt="" />
                    <div className='icon-st'>
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> (0)
                    </div>
                    <div className='na-lp-dl'>
                        <h6>Used Dell Latitude 7440 Core i5 Laptop price in Pakistan</h6>
                    </div>
                    <div className='pr-lp-dl-1'>
                        <h6>PKR 36,500.00</h6>
                    </div>
                    <div className='line-8'></div>
                    <div className='bt-box-2'>
                        <div className='fo-icon-hc-1'>
                        <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <button><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
                        <div className='hans-icon-1'>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
    <hr />
    <hr />

                    <div className='footer-box'>
                        <div className='footer-content'>
                            <div className="footer-1">
                                 <div className='footer-t-te'>
                                    <h4>Contact Us</h4>
                                    <p className='h-p-7'><FontAwesomeIcon icon={faPhone} /> 0308-4999125, 051-4852602, 051-4852409, <br />  0308-1718453</p>
                                    <p className='h-p-8'><FontAwesomeIcon icon={faEnvelope} /> Sunny@laptopmall.pk</p>
                                    <p className='h-p-9 '><FontAwesomeIcon icon={faLocationDot} /> Shop# 108, 109, First Floor Umair Center,   <br /> 6th Road, Khanewal, Pakistan</p>
                                 </div>
                            </div>
                            <div className="footer-1">
                            <div className='footer-t-te'>
                                    <h4>My Account</h4>
                                    <p className='h-p-10'>Dashboard</p>
                                    <p className='h-p-11'>My Orders</p>
                                    <p className='h-p-12'>My Reviews</p>
                                    <p className='h-p-13'>My Profile</p>
                                 </div>
                            </div>
                            <div className="footer-1">
                            <div className='footer-t-te'>
                                    <h4>Useful Links</h4>
                                    <p className='h-p-14'>Privacy Policy</p>
                                    <p className='h-p-15'>Terms & Conditions</p>
                                 </div>
                            </div>
                            <div className="footer-1">
                            <div className='footer-t-te'>
                                    <h4>Tags</h4>
                                    <div className='fo-bo h-p-1'><p>Best Laptop Price in Pakistan</p></div>
                                    <div className='fo-bo h-p-2'><p>Good Laptop Price in Pakistan</p></div>
                                    <div className='fo-bo h-p-3'><p>Laptop Price in Pakistan</p></div>
                                    <div className='fo-bo h-p-4'><p>Used Dell Laptop Price in Pakistan</p></div>
                                    <div className='fo-bo h-p-5'><p>Used Gaming Laptop Price in Pakistan</p></div>
                                    <div className='fo-bo h-p-6'><p>Used Laptop Price in Pakistan</p></div>
                                 </div>
                            </div>
                        </div>
                    </div>

                    

                </div>
  )
}

export default Blog