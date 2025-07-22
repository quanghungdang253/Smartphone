import hot_products from './dataHome/hot_products.json';
import tivi from './dataHome/tivi.json';
import fridge from './dataHome/fridge.json';
import Water_purifier from './dataHome/Water-purifier.json';
//=================================dataHome1=================================
import hot_products_1 from '../data-selection/dataHome1/hot_products.json';
import tivi_1 from '../data-selection/dataHome1/tivi.json';
import fridge_1 from '../data-selection/dataHome1/fridge.json';
import Water_purifier_1 from '../data-selection/dataHome1/Water-purifier.json';

//==============================dataHome2=========================================
import  hot_products_2 from '../data-selection/dataHome2/hot_products.json';
import tivi_2 from '../data-selection/dataHome2/tivi.json';
import fridge_2 from '../data-selection/dataHome2/fridge.json';
import Water_purifier_2 from '../data-selection/dataHome2/Water-purifier.json';

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

const NameProducts_1 = [
    {id: 0, name: "Hot Sale giảm giá ", image: image_4, sale: '50%'},
    {id: 1, name: "Tivi", image: image_1, sale: '50%'},
    {id: 2, name: "Smartphone", image: image_3, sale: '50%'},
    {id: 3, name: "Tivi", image: image_5, sale: '50%'},
    {id: 4, name: "Smartphone", image: "", sale: '50%'},
    {id: 5, name: "Máy lọc nước", image: "", sale: '50%'},
    {id: 6, name: "Nồi chiên", image: "", sale: '50%'}
]
const dataHome = [   Water_purifier, tivi,fridge,    hot_products,  fridge, hot_products, hot_products];

const dataHome_1 = [ Water_purifier_1, fridge_1, tivi_1, hot_products_1,];
const dataHome_2 = [fridge_2, tivi_2, hot_products_2, Water_purifier_2];
export {NameProducts ,NameProducts_1, dataHome, dataHome_1 , dataHome_2};
