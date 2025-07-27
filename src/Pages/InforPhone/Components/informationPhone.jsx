
import { useEffect, useState } from "react";
import Slideimage from "./contact-map";
import { Link } from "react-router-dom";
import { useRef } from "react";
import ListimageProduct from "../../Products_list/components/ListimageProduct";
import ListChildComponents from "./list-child-components";
import { totalMoney } from "../../../features/cart/cartSlice";
//===================================style===============================================================
import styles from '../styles/components/info-phone.module.scss';
import style__sale from '../styles/components/Sale.module.scss';
//========================data====================================
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Static_data from '../data/data-icon/Static_data.json';
import {faGift} from '@fortawesome/free-solid-svg-icons';
import RelatedProducts from "./related-products";
import ProductParameters from "./product-parameters";
import img1 from '../image/img1.jpg';
import img2 from '../image/img2.jpg';
import AttachedProduct from "./attached-product";
import ProductDescription from "./product-description";
import { useDispatch } from "react-redux";
import { addCart } from "../../../features/cart/cartSlice";
import Breadcrumb from "../../../Components/location/location";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { BreadcrumbContext } from "../../../Context/share-data-bread-crumb/share-data-bread-crumb";


//======================================hình ảnh============================================================
// áp dụng quy tắc  camelCase  để đặt tên 
 function InformationPhones({Data , id, nameEnpoint, nameNavigation}) {
 
  const navigate  = useNavigate();
  const dispatch = useDispatch();
  const [customs, setCustoms] = useState(true);
  const [active, setActive] = useState(0);
  const [preindex , setIndex] = useState(0);
 
  const [indexproduct,setIndexProduct] = useState([]);
  //====================================================================

  const [total, setTotal] = useState(Data.price);
  const [totalorginal , setTotalOriginal] = useState(Data.total_original);
  const [original_price , setOriginal_Price] = useState([]);
  const [product, setSumProduct] = useState(1);

  const [isFixed, setIsFixed] = useState(false);
  const [savedTop, setSavedTop] = useState(0);
  const [allowScrollLeft, setAllowScrollLeft] = useState(false);
  const [topPosition, setTopPosition] = useState(0);
  const [valueInput , setValueInput] = useState([Data]);
const asideRef = useRef(null); 
const mainRef = useRef(null);



const [mainHeight, setMainHeight] = useState("auto");
const [allowScroll, setAllowScroll] = useState(false);
let moneysavings = parseFloat(Data.total_original) - parseFloat(Data.price);

  let  pre_money_savings =  moneysavings.toFixed(6)
  .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  .replace(/^0\./, ''); // Loại bỏ "0." ở đầu
const [totalsavings , setTotalSavings] = useState(pre_money_savings);

// Chuyển chuỗi có dấu chấm về số thực
const parseNumber = (value) => {
    return parseFloat(value.replace(/\./g, '')); 
  };
  
  const handleALert = () => {
    Swal.fire({
      icon: 'success',
      title: 'Thành công!',
      text: 'Sản phẩm đã được thêm vào giỏ hàng.',
      confirmButtonText: 'Xem giỏ hàng', 
      background: '#f8f9fa',
      iconColor: '#28a745',
      customClass: {
        popup: 'shadow-lg rounded',
      },
 
    }).then((result) => {
   
      if (result.isConfirmed) {
        window.location.href = '/Cart';
      }
    });
  };
  

  const formatNumber = (value) => {
    const formatter = new Intl.NumberFormat('vi-VN', {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
    return formatter.format(value);
  };
  

  const handleActive = (id, ischecked) => {
    const product = Data.attached__product.find((item) => item.id === id);
    if (!product) return;
  
    const productPrice = parseNumber(product.price);
    const productDiscount = parseNumber(product.discount);
  
    if (ischecked) {
      
      setSumProduct((prev) => prev + 1);
      setIndexProduct((prev) => [...prev, id]);
  
      setTotal((prevTotal) => {
        const newTotal = parseNumber(prevTotal) + productPrice;
        return formatNumber(newTotal); 
      });
  
      setTotalOriginal((prevTotal) => {
        const newTotal = parseNumber(prevTotal) + productDiscount;
        return formatNumber(newTotal); 
      });
  
      setTotalSavings((prev) => {
        const savings = parseNumber(prev) + (productDiscount - productPrice);
        return formatNumber(savings); 
      });
    } else {
      setSumProduct((prev) => prev - 1);
      setIndexProduct((prevIndex) => prevIndex.filter((item) => item !== id));
  
      setTotal((prevTotal) => {
        const newTotal = parseNumber(prevTotal) - productPrice;
        return formatNumber(newTotal); 
      });
  
      setTotalOriginal((prevTotal) => {
        const newTotal = parseNumber(prevTotal) - productDiscount;
        return formatNumber(newTotal); 
      });
  
      setTotalSavings((prev) => {
        const savings = parseNumber(prev) - (productDiscount - productPrice);
        return formatNumber(savings); 
      });
    }
  };
  const addProduct = () => {
      dispatch(addCart(Data));
      handleALert()
}
const buyNow = () => {
      dispatch(addCart(Data));
      window.location.href = '/Cart';
}
const addProduct_index_one = (id) => {

    handleALert();
      if(id >= 0) {
        dispatch(addCart(Data.attached__product[id]));
      }else {

      }
      
}
const handleCheckBox = (e , value) => {
      if(e.target.checked){
          setValueInput(() => {
                  return [
                     ...valueInput,
                     value
                  ]
          });
      }else {
          setValueInput(null);
      }
}
const sendValueInput = (data) => {
     data.map((Item) => {
      dispatch(addCart(Item));
     })
     
}

  useEffect(() => {
    const handleScroll = () => {
        if (!asideRef.current) return;

        if (mainRef.current) {
          // Lấy chiều cao lớn nhất giữa aside và body
          const bodyHeight = mainRef.current.querySelector(`.${styles.body}`)?.scrollHeight || 0;
          const asideHeight = mainRef.current.querySelector(`.${styles.aside}`)?.scrollHeight || 0;
          
          // Cập nhật chiều cao dựa trên nội dung lớn hơn
          setMainHeight(Math.max(bodyHeight, asideHeight) + "px");
        }
        const aside = asideRef.current;
        const asideScrollHeight = aside.scrollHeight;
        const asideClientHeight = aside.clientHeight;
        const asideScrollTop = aside.scrollTop;
        // Kiểm tra điều kiện trước khi cập nhật state
        if (asideClientHeight + asideScrollTop >= asideScrollHeight - 10) {
            setAllowScrollLeft(true);
        }else {
          setAllowScrollLeft(false);
        }
        if (window.scrollY >= 150) {
                    setIsFixed(true);
                 
        }else if(window.scrollY > 800){
          console.log("da lon honw "+window.scrollY);
          if (asideRef.current) {
                      setSavedTop(800);
           }
              setIsFixed(false);
        }
        else {
                setSavedTop(0)
                setIsFixed(false);     
        } 
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleScroll);
    };
}, [allowScrollLeft]);
// ========================thực hiện nhận và chia sẻ tên sản phẩm bằng context  =========================
const  {setBreadcrumb} = useContext(BreadcrumbContext);
useEffect(() => {
   window.scrollTo({
            top: 0,
            behavior:'smooth'
      })
   setBreadcrumb({ Nameproduct: Data.title });
},[])
     return (
      <div className={styles.Container}>
            <ListChildComponents Static_data={Static_data} Data={Data}/>
    <main>  
      <div className={styles.body}> 
        <div   
            className={` ${isFixed ? styles.body__aside : styles.positionRelative}  ${styles.body__mobie} `} 
            style={
            { 
                   marginTop: !isFixed ? `${savedTop}px` : "0px", // Đặt lại vị trí khi relative
            }
            }
            >
          <div className={styles.boxleft}>
                <Slideimage image={Data?.image} index={preindex}/>
             

          </div> 
        </div>  
        <aside 
             ref={asideRef}
            className={`${styles.aside}`} 
           
             >
            <div className={styles.Wrapper__aside}> 
                <div className={styles.details_top1}>
                  <div className={styles.details_top1__price}>
                    {Data.Item.map((Item,index) => (                     
                      <h1 
                         onClick={() => handleActive(index)}
                         className={`${styles.memory__price__link} ${styles.link} ${active === index ? styles.active : ""}`}                    
                             > 
                              <h2>  {Item.item}   </h2> 
                              <p> {Item.price}  </p> 
                            </h1>                                                                                   
                    ))}
                  </div>
                </div>
                <div className={styles.details_top2}>
                <h1 className={styles.title__detail_top2}> Chọn màu để xem giá và chi nhánh có hàng  </h1>
                    <div className={styles.details_top2__product}>
                    
                          {Data.Typephone.map((Item,index) => (
                                  <a 
                                    key={Item.id} 
                                    className={`${styles.Link} ${index === preindex ? `${styles.addborder}`: ""}`}
                                    onClick={() => setIndex(Item.id)}
                                    > 
                                      <img src={Item.image} alt="" className={styles.img}/>
                                      <div className={styles.name__price}>   
                                            <h2 className={styles.title}> {Item.name} </h2>
                                             <p> {Item.price} </p>
                                      </div>
                                   </a>                           
                          ))}
                    </div>                     
                </div> 
                <div className={style__sale.sale}>
                            <div className={style__sale.choose__price}>
                                  <div className={`${style__sale.choose__price_1} ${style__sale.choose} ${!customs ? style__sale.old : style__sale.new} `}
                                       onClick={() => setCustoms(false)}       >
                                      <img src='https://cdn2.cellphones.com.vn/x35,webp/media/icon/pdp-trade-icon.png'  alt=""/>
                                        <div>  
                                            <p> Giá thu cũ lên đời </p>
                                            <h1> 12.990.000 đ</h1>
                                            <p> 29.785.000 đ </p>
                                        </div>
                                  </div>

                                  <div className={`${style__sale.choose__price_2}  ${style__sale.choose}  ${!customs ? style__sale.old : style__sale.new}`}
                                       onClick={() => setCustoms(true)}>
                                            <p> Giá mua ngay  </p>
                                            <h1> 12.990.000 </h1>
                                            <p> 29.785.000  </p>
                                  </div>                         
                            </div>
                            <div className={style__sale.listimage}> 
                                   {/* <ListimageProduct image={Static_data.image__advertisement} />             */}
                            </div> 
                              
                     </div>
                     <div>  
                            {!customs ? (<Link className={`${style__sale.btn__link} ${style__sale.btn}}`}>  Lên đời ngay </Link>) 
                
                            : (
                              <>    
                                  <div className={style__sale.Box__buy__now}>
                                      <Link 
                                        className={` ${style__sale.btn__buy} ${style__sale.btn}`}
                                        onClick={() => {
                                          buyNow();
                                       }}
                                         >  Mua ngay
                                          </Link>
                                      <button className={`${style__sale.btn__add__product} `}
                                      
                                    
                                       onClick={() => {
                                            addProduct();
                                       }}>
                                              <img src="https://cdn2.cellphones.com.vn/insecure/rs:fill:50:0/q:70/plain/https://cellphones.com.vn/media/wysiwyg/add-to-cart.png" alt=""/>
                                               Thêm giỏ hàng 
                                      </button>
                                  </div>
                                  <div className={style__sale.payment__method}>
                                      <Link className={style__sale.btn}>  
                                            <h1> Mua trả góp 0% </h1>
                                            <p> Trả chỉ từ 0đ</p>
                                      </Link>
                                      <Link className={style__sale.btn}>  
                                            <h1> Trả góp 0% Qua thẻ </h1>
                                            <p> Trả chỉ từ 0đ</p>
                                      </Link>
                                  </div>
                                </> 
                            )}
                            <div className={style__sale.sale_1}>
                                <div className={style__sale.Box}>
                                    <div className={style__sale.Box_gift_1}>    {/* box gift: hộp quà   */}
                                        <FontAwesomeIcon icon={faGift} className={style__sale.icon_gift}/>
                                              <h1> Khuyến mãi </h1>
                                    </div>                                                                       
                                </div>
                                <div className={style__sale.Box__gift_2}>
                                          {Static_data.gift__box.map((Item) => (                                                           
                                              <p key={Item.id} className={style__sale.gift__content}>
                                                    <Link className={style__sale.gift__text}>   {Item.content}   </Link>
                                               </p>
                                          ) )}
                                </div>                          
                            </div> 
                      </div>                                
                  <AttachedProduct Static_data={Static_data} />
                      <div className={style__sale.attached__product}>
                            <div className={style__sale.attach__child1}>
                               <div className={style__sale.title}> Ưu đã hấp dẫn khi mua kèm với <span> {Data.title} </span>   </div>  
                               <div className={style__sale.list__product}>
                                    {Data.attached__product.map((Item) => (
                                            <div key={Item.id} className={style__sale.boxList}>  
                                                <div className={style__sale.Box_1}> 
                                                
                                                     <img src={Item.image} alt="" className={style__sale.Box1__image}/>
                                                  {Item.id === 0 ?    ('') :
                                                              
                                    (<input 
                                      type="checkbox"
                                       onClick={(e) => handleActive(Item.id , e.target.checked)} className={style__sale.Box1_checkbox}
                                       onChange={(e) => handleCheckBox(e , Item) }
                                       />)
                                    
                                        }                                              
                                            </div>
                                                <div  className={style__sale.Box_2}>  
                                                    <a>
                                                         {Item.id === 0 ? (<b> Đang xem </b>) : ('')}
                                                        {Item.id === 0 ? (Data.title) : (Item.name)}
                                                      
                                                   </a>
                                                  <div className={style__sale.Box_3}> 
                                                    <div className={style__sale.priceDown}> 
                                                        <span className={style__sale.price}> {Item.price} 
                                                        </span>
                                                        <span className={style__sale.discount}> {Item.discount} 
                                                        </span>
                                                     </div>
                                                        <a onClick={() => {
                                                            addProduct_index_one(Item.id)
                                                        }}>
                                                        <img src="https://cdn2.cellphones.com.vn/insecure/rs:fill:50:0/q:70/plain/https://cellphones.com.vn/media/wysiwyg/add-to-cart.png" alt=""/>
                                                              Thêm vào giỏ hàng
                                                       </a>
                                                   </div>                                                
                                                </div>                                             
                                            </div>
                                    ))}
                               </div>

                               </div>

                               <div className={style__sale.btn__product}>
                                    <div className={style__sale.Box__title}> 
                                            Tổng tiền : 
                                             <h1> {total} </h1>
                                            <h2> {totalorginal}</h2>
                                           
                                     </div>
                                        <div className={style__sale.Box__btn_buy}>
                                                <Link
                                                to="/Cart"
                                                   className={style__sale.Link__btn_buy}
                                                   onClick={() => sendValueInput(valueInput)} > 
                                                         <span>  Mua {product} Sản phẩm  </span> 
                                                        <span> Tiết kiệm {totalsavings}</span> 
                                                </Link>
                                        </div>   
                               </div>       
                      </div>                  
                </div>    
                       
                       <img src={img2} alt="" className={styles.imgProduct} style={{objectFit:'cover', width: '100%'}}/>       
            </aside> 
          
          
          
            </div>
              
            </main> 
            <div>   
                <RelatedProducts id={id} dataPhone={Data}  nameEnpoint={nameEnpoint}/>
            </div>   
            <div> 
                <ProductDescription dataPhone={Data} /> 
               
            </div>
            
        </div>
      
       
      );
    }
    

      
//=======================================================






//============================css chung===========================


  
    
    export default InformationPhones;
