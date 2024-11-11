import React from "react";
import { useState } from "react"
import '../HeaderStyle/Listphone.css';
const ListPhone = () =>{
const [phone] = useState([ // Dùng State để lưu trữ và cập nhật các điện thoại mới 
    {
        id: 1,
        image:'https://imaxmobile.vn/media/data/san-pham/6S-6SPLUS/600_6s_gold_800x800.jpg',
        title:"iPhone 6s Plus Quốc Tế - 16GB",
        price:'1.450.000 ₫',
        buy: 'Buy Nox',
         // Thông tin chi tiết điện thoại ,
         name : "I Phone 6 Plus ",
         Price : "3.000.000 Vnđ",
         phoneimage : [
                   
                    "https://cdn.tgdd.vn/Products/Images/42/69783/Slider/-iphone-6-plus-64gb--5.jpg",
                    "https://cdn.tgdd.vn/Products/Images/42/69783/iphone-6-plus-16gb-xam1-1-3-org.jpg",
                    "https://cdn.tgdd.vn/Products/Images/42/69783/iphone-6-plus-16gb-bac1-1-3-org.jpg"

         ],
         Title : " Cấu hình Điện thoại iPhone 11  Pro Max 64GB ",
         Text:  <table className="table">
                       
                     <tr>
                          <td className="column column1"> Màn hình:   </td>
                          <td className="column"> OLED6.5"Super Retina XDR</td>
                     </tr>
                     <tr>
                 
                         <td className=" column column1">  Hệ Điều Hành   </td> 
                         <td className="column"> iOS 14 </td>
                     </tr>
                     <tr>
                       
                     </tr>
                     <tr>
                            <td className="column column1"> Bộ nhớ </td>    
                            <td className="column">  18gb </td> 
                       
                     </tr>
                     <tr>
                        
                         <td className="column column1"> Camera sau: </td>    
                            <td className="column">  8 MP </td> 
                     </tr>
                     <tr>                   
                            <td className="column column1"> Camera trước: </td>    
                            <td className="column">  1.2 MP</td> 
                     </tr>
                     <tr>    
                             <td className="column column1"> Chip:  </td>    
                            <td className="column">  Apple A8 </td> 
                     </tr>
                     <tr>                      
                             <td className="column column1"> RAM: </td>    
                            <td className="column"> 1 GB </td> 
                     </tr>
                     <tr>                      
                             <td className="column column1">Dung lượng lưu trữ: </td>    
                            <td className="column"> 32 GB </td> 
                     </tr>
                     <tr>                      
                             <td className="column column1"> SIM: </td>    
                            <td className="column"> 1 Nano SIMHỗ trợ 4G </td> 
                     </tr>
                     <tr>                      
                             <td className="column column1"> Pin, Sạc:</td>    
                            <td className="column"> 1810 mAh </td> 
                     </tr>
                     <tr>                      
                             <td className="column column1"> Hãng</td>    
                            <td className="column">iPhone (Apple). Xem thông tin hãng </td> 
                     </tr>
             </table>,
             informationImage : "https://cdn.tgdd.vn/Products/Images/42/200533/Kit/iphone-11-pro-max-note.jpg",
    },
 
    {
        id: 2,
        image:'https://cdn.viettelstore.vn/Images/Product/ProductImage/723473385.jpeg',
        title:"iPhone 14 128GB%",
        price:"17.590.000 ₫ 18.990.000 ₫ Đã bao gồm thuế VAT",
        buy: 'Buy Nox',
         // Thông tin chi tiết điện thoại ,
         name : "iPhone 14 128GB%",
         Price : "3.000.000 Vnđ",
         phoneimage : [
                   
            "https://cdn.tgdd.vn/Products/Images/42/69783/Slider/-iphone-6-plus-64gb--5.jpg",
            "https://cdn.tgdd.vn/Products/Images/42/69783/iphone-6-plus-16gb-xam1-1-3-org.jpg",
            "https://cdn.tgdd.vn/Products/Images/42/69783/iphone-6-plus-16gb-bac1-1-3-org.jpg"

 ],
         Text:  <table>
         <td>
               <h5>     Cấu hình Điện thoại iPhone 11  Pro Max 64GB   </h5>

         </td>
      <tr>
           <td className="column1"> Màn hình:   </td>
           <td> OLED6.5"Super Retina XDR</td>
      </tr>
      <tr>
          <td className="column1">  Hệ Điều Hành   </td> 
          <td> iOS 14 </td>
      </tr>
      <tr>
          <td className="column1">  Hệ Điều Hành   </td> 
          <td> iOS 14 </td>
      </tr>
      <tr>
             <td className="column1"> Bộ nhớ  18gb</td>     
      </tr>
</table>,
             informationImage : "https://cdn.tgdd.vn/Products/Images/42/200533/Kit/iphone-11-pro-max-note.jpg",
    },
    {
        id: 3,
        image:'https://www.duchuymobile.com/images/variant_image/66/oppo-reno11-5g-trang_m7l0-ac.jpg',
        title:"OPPO Reno11F 5G 8GB-256GB",
        price:'8.490.000 ₫',
        buy: 'Buy Nox',
         // Thông tin chi tiết điện thoại ,
         name : "I Phone 6 Plus ",
         Price : "3.000.000 Vnđ",
         phoneimage : "https://cdn-images.vtv.vn/2019/10/10/photo-1-15706463929181755249740.jpg",
         Text: <table>
         <td>
               <h5>     Cấu hình Điện thoại iPhone 11  Pro Max 64GB   </h5>

         </td>
      <tr>
           <td className="column1"> Màn hình:   </td>
           <td> OLED6.5"Super Retina XDR</td>
      </tr>
      <tr>
          <td className="column1">  Hệ Điều Hành   </td> 
          <td> iOS 14 </td>
      </tr>
      <tr>
          <td className="column1">  Hệ Điều Hành   </td> 
          <td> iOS 14 </td>
      </tr>
      <tr>
             <td className="column1"> Bộ nhớ  18gb</td>     
      </tr>
</table>,
             informationImage : "https://cdn.tgdd.vn/Products/Images/42/200533/Kit/iphone-11-pro-max-note.jpg",

    },
    {
        id: 4,
        image:'https://cdn.tgdd.vn/Products/Images/42/307174/samsung-galaxy-s24-ultra-grey-thumb-600x600.jpg',
        title:"Samsung Galaxy ZFold5 5G",
        price:'25.000.000',
        buy: 'Buy Nox',
         // Thông tin chi tiết điện thoại ,
         name : "I Phone 6 Plus ",
         Price : "3.000.000 Vnđ",
         phoneimage : "https://cdn-images.vtv.vn/2019/10/10/photo-1-15706463929181755249740.jpg",
         Text: <table>
         <td>
               <h5>     Cấu hình Điện thoại iPhone 11  Pro Max 64GB   </h5>

         </td>
      <tr>
           <td className="column1"> Màn hình:   </td>
           <td> OLED6.5"Super Retina XDR</td>
      </tr>
      <tr>
          <td className="column1">  Hệ Điều Hành   </td> 
          <td> iOS 14 </td>
      </tr>
      <tr>
          <td className="column1">  Hệ Điều Hành   </td> 
          <td> iOS 14 </td>
      </tr>
      <tr>
             <td className="column1"> Bộ nhớ  18gb</td>     
      </tr>
</table>,
             informationImage : "https://cdn.tgdd.vn/Products/Images/42/200533/Kit/iphone-11-pro-max-note.jpg",
    },
    {
        id: 5,
        image:'https://viostore.vn/wp-content/uploads/2023/11/2-10.png',
        title:"Xiaomi Redmi Note 12T Pro (8|256GB) Dimensity 8200 Ultra",
        price:'1.450.000 ₫',
        buy: 'Buy Nox',
        // Thông tin chi tiết điện thoại ,
        name : "I Phone 6 Plus ",
        Price : "3.000.000 Vnđ",
        phoneimage : "https://cdn-images.vtv.vn/2019/10/10/photo-1-15706463929181755249740.jpg",
        Text: <table>
        <td>
              <h5>     Cấu hình Điện thoại iPhone 11  Pro Max 64GB   </h5>

        </td>
     <tr>
          <td className="column1"> Màn hình:   </td>
          <td> OLED6.5"Super Retina XDR</td>
     </tr>
     <tr>
         <td className="column1">  Hệ Điều Hành   </td> 
         <td> iOS 14 </td>
     </tr>
     <tr>
         <td className="column1">  Hệ Điều Hành   </td> 
         <td> iOS 14 </td>
     </tr>
     <tr>
            <td className="column1"> Bộ nhớ  18gb</td>     
     </tr>
</table>,
            informationImage : "https://cdn.tgdd.vn/Products/Images/42/200533/Kit/iphone-11-pro-max-note.jpg",
    },
    {
        id: 6,
        image:'https://viostore.vn/wp-content/uploads/2022/07/3.jpg',
        title:"Sony Xperia 5 64GB Sony Xperia 5 64GB ",
        price:'2.590.000',
        buy: 'Buy Nox',
        information: 'Thông tin Điện thoại',
        // Thông tin chi tiết điện thoại ,
        name : "I Phone 6 Plus ",
        Price : "3.000.000 Vnđ",
        phoneimage : "https://cdn-images.vtv.vn/2019/10/10/photo-1-15706463929181755249740.jpg",
        Text: <table>
        <td>
              <h5>     Cấu hình Điện thoại iPhone 11  Pro Max 64GB   </h5>

        </td>
     <tr>
          <td className="column1"> Màn hình:   </td>
          <td> OLED6.5"Super Retina XDR</td>
     </tr>
     <tr>
         <td className="column1">  Hệ Điều Hành   </td> 
         <td> iOS 14 </td>
     </tr>
     <tr>
         <td className="column1">  Hệ Điều Hành   </td> 
         <td> iOS 14 </td>
     </tr>
     <tr>
            <td className="column1"> Bộ nhớ  18gb</td>     
     </tr>
</table>,
            informationImage : "https://cdn.tgdd.vn/Products/Images/42/200533/Kit/iphone-11-pro-max-note.jpg",

    },
    {
        id: 7,
        image:'https://viostore.vn/wp-content/uploads/2023/07/6-1.png',
        title:"Sony Xperia 5 Mark III 8GB|128GB Nhật",
        price:'1.450.000 ₫',
        buy: 'Buy Nox',
        information: 'Thông tin Điện thoại',
        // Thông tin chi tiết điện thoại ,
        name : "I Phone 6 Plus ",
        Price : "3.000.000 Vnđ",
        phoneimage : "https://cdn-images.vtv.vn/2019/10/10/photo-1-15706463929181755249740.jpg",
        Text: <table>
        <td>
              <h5>     Cấu hình Điện thoại iPhone 11  Pro Max 64GB   </h5>

        </td>
     <tr>
          <td className="column1"> Màn hình:   </td>
          <td> OLED6.5"Super Retina XDR</td>
     </tr>
     <tr>
         <td className="column1">  Hệ Điều Hành   </td> 
         <td> iOS 14 </td>
     </tr>
     <tr>
         <td className="column1">  Hệ Điều Hành   </td> 
         <td> iOS 14 </td>
     </tr>
     <tr>
            <td className="column1"> Bộ nhớ  18gb</td>     
     </tr>
</table>,
            informationImage : "https://cdn.tgdd.vn/Products/Images/42/200533/Kit/iphone-11-pro-max-note.jpg",

    },
    {
        id: 8,
        image:'https://viostore.vn/wp-content/uploads/2023/08/oneplus-ace-den-1.jpg.png',
        title:"OnePlus ACE 12GB|256GB Dimensity 8100-Max New 100%",
        price:'6,190,000₫',
        buy: 'Buy Nox',
        information: 'Thông tin Điện thoại',
        // Thông tin chi tiết điện thoại ,
        name : "I Phone 6 Plus ",
        Price : "3.000.000 Vnđ",
        phoneimage : "https://cdn-images.vtv.vn/2019/10/10/photo-1-15706463929181755249740.jpg",
        Text: <table>
        <td>
              <h5>     Cấu hình Điện thoại iPhone 11  Pro Max 64GB   </h5>

        </td>
     <tr>
          <td className="column1"> Màn hình:   </td>
          <td> OLED6.5"Super Retina XDR</td>
     </tr>
     <tr>
         <td className="column1">  Hệ Điều Hành   </td> 
         <td> iOS 14 </td>
     </tr>
     <tr>
         <td className="column1">  Hệ Điều Hành   </td> 
         <td> iOS 14 </td>
     </tr>
     <tr>
            <td className="column1"> Bộ nhớ  18gb</td>     
     </tr>
</table>,
            informationImage : "https://cdn.tgdd.vn/Products/Images/42/200533/Kit/iphone-11-pro-max-note.jpg",

    },
    {
        id: 9,
        image:'https://viostore.vn/wp-content/uploads/2024/03/3-14.png',
        title:"OnePlus Ace 3V (12GB|256GB) Snap 7+ Gen 3 New 100% FullBox ",
        price:'8,290,000₫',
        buy: 'Buy Nox',
        information: 'Thông tin Điện thoại',
        // Thông tin chi tiết điện thoại ,
        name : "I Phone 6 Plus ",
        Price : "3.000.000 Vnđ",
        phoneimage : "https://cdn-images.vtv.vn/2019/10/10/photo-1-15706463929181755249740.jpg",
        Text: <table>
        <td>
              <h5>     Cấu hình Điện thoại iPhone 11  Pro Max 64GB   </h5>

        </td>
     <tr>
          <td className="column1"> Màn hình:   </td>
          <td> OLED6.5"Super Retina XDR</td>
     </tr>
     <tr>
         <td className="column1">  Hệ Điều Hành   </td> 
         <td> iOS 14 </td>
     </tr>
     <tr>
         <td className="column1">  Hệ Điều Hành   </td> 
         <td> iOS 14 </td>
     </tr>
     <tr>
            <td className="column1"> Bộ nhớ  18gb</td>     
     </tr>
</table>,
            informationImage : "https://cdn.tgdd.vn/Products/Images/42/200533/Kit/iphone-11-pro-max-note.jpg",

    },
    {
        id: 10,
        image:'https://viostore.vn/wp-content/uploads/2018/05/445579-ipad-air-2-colors.jpg',
        title:"Apple Ipad Air 2 16GB 4G",
        price:'4.450.000 ₫',
        buy: 'Buy Nox',
        information: 'Thông tin Điện thoại',
        // Thông tin chi tiết điện thoại ,
        name : "I Phone 6 Plus ",
        Price : "3.000.000 Vnđ",
        phoneimage : "https://cdn-images.vtv.vn/2019/10/10/photo-1-15706463929181755249740.jpg",
        Text: <table>
        <td>
              <h5>     Cấu hình Điện thoại iPhone 11  Pro Max 64GB   </h5>

        </td>
     <tr>
          <td className="column1"> Màn hình:   </td>
          <td> OLED6.5"Super Retina XDR</td>
     </tr>
     <tr>
         <td className="column1">  Hệ Điều Hành   </td> 
         <td> iOS 14 </td>
     </tr>
     <tr>
         <td className="column1">  Hệ Điều Hành   </td> 
         <td> iOS 14 </td>
     </tr>
     <tr>
            <td className="column1"> Bộ nhớ  18gb</td>     
     </tr>
</table>,
           
            informationImage : "https://cdn.tgdd.vn/Products/Images/42/200533/Kit/iphone-11-pro-max-note.jpg",

    },
    {
        id: 11,
        image:'https://viostore.vn/wp-content/uploads/2022/10/6d4d328ee5aa22f47bbb-768x768.jpg',
        title:"Đồng Hồ Nam Citizen Quartz Blue Steel BI5000-87L Authentic",
        price:'2,290,000₫',
        buy: 'Buy Nox',
        information: 'Thông tin Điện thoại',
        // Thông tin chi tiết điện thoại ,
        name : "I Phone 6 Plus ",
        Price : "3.000.000 Vnđ",
        phoneimage : "https://cdn-images.vtv.vn/2019/10/10/photo-1-15706463929181755249740.jpg",
        Text: <table>
        <td>
              <h5>     Cấu hình Điện thoại iPhone 11  Pro Max 64GB   </h5>

        </td>
     <tr>
          <td className="column1"> Màn hình:   </td>
          <td> OLED6.5"Super Retina XDR</td>
     </tr>
     <tr>
         <td className="column1">  Hệ Điều Hành   </td> 
         <td> iOS 14 </td>
     </tr>
     <tr>
         <td className="column1">  Hệ Điều Hành   </td> 
         <td> iOS 14 </td>
     </tr>
     <tr>
            <td className="column1"> Bộ nhớ  18gb</td>     
     </tr>
</table>,
            informationImage : "https://cdn.tgdd.vn/Products/Images/42/200533/Kit/iphone-11-pro-max-note.jpg",

    },
    {
        id: 12,
        image:'https://viostore.vn/wp-content/uploads/2024/04/2-10.png',
        title:"Vivo iQOO Neo9 (12GB|256GB) Snap 8 Gen 2",
        price:'8,990,000₫',
        buy: 'Buy Nox',
        information: 'Thông tin Điện thoại',
        // Thông tin chi tiết điện thoại ,
        name : "I Phone 6 Plus ",
        Price : "3.000.000 Vnđ",
        phoneimage : "https://cdn-images.vtv.vn/2019/10/10/photo-1-15706463929181755249740.jpg",
        Text: <table>
        <td>
              <h5>     Cấu hình Điện thoại iPhone 11  Pro Max 64GB   </h5>

        </td>
     <tr>
          <td className="column1"> Màn hình:   </td>
          <td> OLED6.5"Super Retina XDR</td>
     </tr>
     <tr>
         <td className="column1">  Hệ Điều Hành   </td> 
         <td> iOS 14 </td>
     </tr>
     <tr>
         <td className="column1">  Hệ Điều Hành   </td> 
         <td> iOS 14 </td>
     </tr>
     <tr>
            <td className="column1"> Bộ nhớ  18gb</td>     
     </tr>
</table>,
            informationImage : "https://cdn.tgdd.vn/Products/Images/42/200533/Kit/iphone-11-pro-max-note.jpg",

    },
    {
        id: 13,
        image:'https://viostore.vn/wp-content/uploads/2024/04/4-8.png',
        title:"Vivo iQOO Neo9 (16GB|512GB) Snap 8 Gen 2 New Seal Fullbox",
        price:'10,490,000₫',
        buy: 'Buy Nox',
        information: 'Thông tin Điện thoại',
        // Thông tin chi tiết điện thoại ,
        name : "I Phone 6 Plus ",
        Price : "3.000.000 Vnđ",
        phoneimage : "https://cdn-images.vtv.vn/2019/10/10/photo-1-15706463929181755249740.jpg",
        Text: <table>
        <td>
              <h5>     Cấu hình Điện thoại iPhone 11  Pro Max 64GB   </h5>

        </td>
     <tr>
          <td className="column1"> Màn hình:   </td>
          <td> OLED6.5"Super Retina XDR</td>
     </tr>
     <tr>
         <td className="column1">  Hệ Điều Hành   </td> 
         <td> iOS 14 </td>
     </tr>
     <tr>
         <td className="column1">  Hệ Điều Hành   </td> 
         <td> iOS 14 </td>
     </tr>
     <tr>
            <td className="column1"> Bộ nhớ  18gb</td>     
     </tr>
</table>,
            informationImage : "https://cdn.tgdd.vn/Products/Images/42/200533/Kit/iphone-11-pro-max-note.jpg",

    },
    {
        id: 14,
        image:'https://viostore.vn/wp-content/uploads/2024/03/1-6.png',
        title:"Google Pixel 5 5G (8GB|128GB) Quốc Tế",
        price:'3,990,000₫',
        buy: 'Buy Nox',
        information: 'Thông tin Điện thoại',
        // Thông tin chi tiết điện thoại ,
        name : "I Phone 6 Plus ",
        Price : "3.000.000 Vnđ",
        phoneimage : "https://cdn-images.vtv.vn/2019/10/10/photo-1-15706463929181755249740.jpg",
        Text: <table>
        <td>
              <h5>     Cấu hình Điện thoại iPhone 11  Pro Max 64GB   </h5>

        </td>
     <tr>
          <td className="column1"> Màn hình:   </td>
          <td> OLED6.5"Super Retina XDR</td>
     </tr>
     <tr>
         <td className="column1">  Hệ Điều Hành   </td> 
         <td> iOS 14 </td>
     </tr>
     <tr>
         <td className="column1">  Hệ Điều Hành   </td> 
         <td> iOS 14 </td>
     </tr>
     <tr>
            <td className="column1"> Bộ nhớ  18gb</td>     
     </tr>
</table>,
            informationImage : "https://cdn.tgdd.vn/Products/Images/42/200533/Kit/iphone-11-pro-max-note.jpg",

    },
    {
        id: 15,
        image:'https://viostore.vn/wp-content/uploads/2023/06/600x600_google_pixel_6a_xanh_thumb_600x600_didongmy-1.jpg',
        title:"Google Pixel 6A 5G (6GB|128GB) Quốc Tế",
        price:'4,590,000₫',
        buy: 'Buy Nox',
        information: 'Thông tin Điện thoại',
        // Thông tin chi tiết điện thoại ,
        name : "I Phone 6 Plus ",
        Price : "3.000.000 Vnđ",
        phoneimage : "https://cdn-images.vtv.vn/2019/10/10/photo-1-15706463929181755249740.jpg",
        Text: <table>
        <td>
              <h5>     Cấu hình Điện thoại iPhone 11  Pro Max 64GB   </h5>

        </td>
     <tr>
          <td className="column1"> Màn hình:   </td>
          <td> OLED6.5"Super Retina XDR</td>
     </tr>
     <tr>
         <td className="column1">  Hệ Điều Hành   </td> 
         <td> iOS 14 </td>
     </tr>
     <tr>
         <td className="column1">  Hệ Điều Hành   </td> 
         <td> iOS 14 </td>
     </tr>
     <tr>
            <td className="column1"> Bộ nhớ  18gb</td>     
     </tr>
</table>,
            informationImage : "https://cdn.tgdd.vn/Products/Images/42/200533/Kit/iphone-11-pro-max-note.jpg",

    },
    {
        id: 16,
        image:'https://viostore.vn/wp-content/uploads/2024/03/19.png',
        title:"Google Pixel 7 5G (8GB|128GB) Quốc Tế",
        price:'7,490,000₫',
        buy: 'Buy Nox',
        information: 'Thông tin Điện thoại',
        // Thông tin chi tiết điện thoại ,
        name : "I Phone 6 Plus ",
        Price : "3.000.000 Vnđ",
        phoneimage : "https://cdn-images.vtv.vn/2019/10/10/photo-1-15706463929181755249740.jpg",
        Text: <table>
        <td>
              <h5>     Cấu hình Điện thoại iPhone 11  Pro Max 64GB   </h5>

        </td>
     <tr>
          <td className="column1"> Màn hình:   </td>
          <td> OLED6.5"Super Retina XDR</td>
     </tr>
     <tr>
         <td className="column1">  Hệ Điều Hành   </td> 
         <td> iOS 14 </td>
     </tr>
     <tr>
         <td className="column1">  Hệ Điều Hành   </td> 
         <td> iOS 14 </td>
     </tr>
     <tr>
            <td className="column1"> Bộ nhớ  18gb</td>     
     </tr>
</table>,
            informationImage : "https://cdn.tgdd.vn/Products/Images/42/200533/Kit/iphone-11-pro-max-note.jpg",

    },
    {
        id: 17,
        image:'https://viostore.vn/wp-content/uploads/2024/03/thumb_806698_default_big-768x768.jpg',
        title:"Honor X50 5G (8GB|256GB) Snap 6 Gen 1 LikeNew",
        price:'4,190,000₫',
        buy: 'Buy Nox',
        information: 'Thông tin Điện thoại',
        // Thông tin chi tiết điện thoại ,
        name : "I Phone 6 Plus ",
        Price : "3.000.000 Vnđ",
        phoneimage : "https://cdn-images.vtv.vn/2019/10/10/photo-1-15706463929181755249740.jpg",
        Text: <table>
        <td>
              <h5>     Cấu hình Điện thoại iPhone 11  Pro Max 64GB   </h5>

        </td>
     <tr>
          <td className="column1"> Màn hình:   </td>
          <td> OLED6.5"Super Retina XDR</td>
     </tr>
     <tr>
         <td className="column1">  Hệ Điều Hành   </td> 
         <td> iOS 14 </td>
     </tr>
     <tr>
         <td className="column1">  Hệ Điều Hành   </td> 
         <td> iOS 14 </td>
     </tr>
     <tr>
            <td className="column1"> Bộ nhớ  18gb</td>     
     </tr>
</table>,
            informationImage : "https://cdn.tgdd.vn/Products/Images/42/200533/Kit/iphone-11-pro-max-note.jpg",

    },
    {
        id: 18,
        image:'https://viostore.vn/wp-content/uploads/2023/02/z4080786998357_f51e6ac2aa1d0e7c96fd714aafc678e2-768x768.jpg',
        title:"ĐỒNG HỒ Bentley BL1869-10MWBB- Pin",
        price:'3,190,000₫',
        buy: 'Buy Nox',
        information: 'Thông tin Đồng Hồ',
        // Thông tin chi tiết điện thoại ,
        name : "I Phone 6 Plus ",
        Price : "3.000.000 Vnđ",
        phoneimage : "https://cdn-images.vtv.vn/2019/10/10/photo-1-15706463929181755249740.jpg",
        Text: <table>
        <td>
              <h5>     Cấu hình Điện thoại iPhone 11  Pro Max 64GB   </h5>

        </td>
     <tr>
          <td className="column1"> Màn hình:   </td>
          <td> OLED6.5"Super Retina XDR</td>
     </tr>
     <tr>
         <td className="column1">  Hệ Điều Hành   </td> 
         <td> iOS 14 </td>
     </tr>
     <tr>
         <td className="column1">  Hệ Điều Hành   </td> 
         <td> iOS 14 </td>
     </tr>
     <tr>
            <td className="column1"> Bộ nhớ  18gb</td>     
     </tr>
</table>,
            informationImage : "https://cdn.tgdd.vn/Products/Images/42/200533/Kit/iphone-11-pro-max-note.jpg",

    },
    

])


return phone;
}


export {ListPhone};
