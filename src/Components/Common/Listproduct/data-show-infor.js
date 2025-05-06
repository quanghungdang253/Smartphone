

 import image_1 from '../../Pages/Home/Components/Section/image/image__sale/image_1.jpg'
 import image_2 from '../../Pages/Home/Components/Section/image/image__sale/image_2.jpg'
 import image_3 from '../../Pages/Home/Components/Section/image/image__sale/image_3.jpg'
 import image_4 from '../../Pages/Home/Components/Section/image/image__sale/image_4.jpg'
 import image_5 from '../../Pages/Home/Components/Section/image/image__sale/Image_5.jpg'
 // =======================================================================================
 import imgPromotion1 from '../icon/img-promotion_3.png';
 import imgPromotion2 from '../icon/img-promotion_4.jpg';
 import imgPromotion3 from '../icon/icon_promotion_1.jpg';
 import imgPromotion5 from '../icon/img-promotion_5.jpg'
 import { dataHome, dataHome_1 , dataHome_2, NameProducts } from '../../Pages/Home/Components/Section/data/data-selection/data-selection';

 let data = [
    { 
     id: 0,
     data: dataHome, 
     handleImg: true,
     dataChoose: [
         {id: 0, name: "Bán chạy", image: image_4, sale: '50%'},
         {id: 1, name: "Tivi", image: image_1, sale: '50%'},
         {id: 2, name: "Smartphone", image: image_3, sale: '50%'},
         {id: 3, name: "Tivi", image: image_5, sale: '50%'},
         {id: 4, name: "Smartphone", image: image_3, sale: '50%'},
         {id: 5, name: "Máy lọc nước", image: image_4, sale: '50%'},
         {id: 6, name: "Nồi chiên", image: image_5, sale: '50%'}
     ],
     title: "",
     imageSale: imgPromotion2
 },
    { 
     id: 1,
     data: dataHome_1,
     handleImg: false,
     dataChoose: [
         {id: 0, name: "Hot Sale giảm giá ", image: image_4, sale: '50%'},
         {id: 1, name: "Tivi", image: image_1, sale: '50%'},
         {id: 2, name: "Smartphone", image: image_3, sale: '50%'},
         {id: 3, name: "Tivi", image: image_5, sale: '50%'},
         {id: 4, name: "Smartphone", image: "", sale: '50%'},
         {id: 5, name: "Máy lọc nước", image: "", sale: '50%'},
         {id: 6, name: "Nồi chiên", image: "", sale: '50%'}
     ],
         title: "",
         imageSale: imgPromotion2
     },
     { id: 2,
         data: dataHome_2, 
         handleImg: true,
         dataChoose: [
             {id: 0, name: "Hot Sale giảm giá ", image: image_4, sale: '50%'},
             {id: 1, name: "Tivi", image: image_1, sale: '50%'},
             {id: 2, name: "Smartphone", image: image_3, sale: '50%'},
             {id: 3, name: "Tivi", image: image_5, sale: '50%'},
             {id: 4, name: "Smartphone", image: "", sale: '50%'},
             {id: 5, name: "Máy lọc nước", image: "", sale: '50%'},
             {id: 6, name: "Nồi chiên", image: "", sale: '50%'}
         ],
             title: "",
             imageSale: imgPromotion5
         }
 ]
 export default data;
