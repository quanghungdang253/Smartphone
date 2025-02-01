import hot_products from './hot_products.json';
import tivi from './tivi.json';
import fridge from './fridge.json';
import Water_purifier from './Water-purifier.json';


//=====================image=====================================

import image_1 from '../../image/image__sale/image_1.jpg';
import image_2 from '../../image/image__sale/image_2.jpg';
import image_3 from '../../image/image__sale/image_3.jpg';
import image_4 from '../../image/image__sale/image_4.jpg';
import image_5 from '../../image/image__sale/Image_5.jpg';


const NameProducts = [
    {id: 0, name: "Bán chạy", image: image_4, sale: '50%'},
    {id: 1, name: "Tivi", image: image_1, sale: '50%'},
    {id: 2, name: "Smartphone", image: image_3, sale: '50%'},
    {id: 3, name: "Tivi", image: image_5, sale: '50%'},
    {id: 4, name: "Smartphone", image: "", sale: '50%'},
    {id: 5, name: "Máy lọc nước", image: "", sale: '50%'},
    {id: 6, name: "Nồi chiên", image: "", sale: '50%'}
]
const dataHome = [  fridge,  tivi,  Water_purifier,  hot_products,  fridge, hot_products, hot_products];

export {NameProducts , dataHome}
