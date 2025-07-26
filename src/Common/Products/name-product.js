

    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import { faMobile, faClock, faCogs, faDesktop, faLaptop, faHome, faHeadphones, faCamera, faTv, faNewspaper,  faSnowflake, faChevronRight  } from '@fortawesome/free-solid-svg-icons';
import Link_phone from '../assets/data/Link_phone.json';
import  Link_laptop from '../assets/data/Link_laptop.json';
import Link_camera from '../assets/data/Link_camera.json';
import Link_earphone from '../assets/data/Link_earphone.json';
import Link_clock from '../assets/data/Link_clock.json';
import Link_television from '../assets/data/Link_Television.json';
import Link_waterfilter from '../assets/data/Link_waterfilter.json';
import Link_computer from '../assets/data/Link_computer.json';
import Link_LInk_householdAppliances from '../assets/data/LInk_householdAppliances.json';
import { listClasses } from '@mui/material';

      const items = [
            { 
                id: 0, 
                icon:  <FontAwesomeIcon icon={faMobile} />,
                label: "Điện thoại, Tabled",
                img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:90:0/q:90/plain/https://cellphones.com.vn/media/tmp/catalog/product/i/p/iphone-15-menu-0001.png"
            } ,
            { 
                 id: 1,
                icon: <FontAwesomeIcon  icon={faLaptop}/> ,
              label:"Laptop",
              img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:90:0/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/b/mb-laptop.png"
            
            },
            { id: 2, icon:  <FontAwesomeIcon icon={faCamera}/>, label:  "Camera Flycam" ,  img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:90:0/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/o/gopro-menu.png"} ,
            { id: 3, icon:  <FontAwesomeIcon icon={ faHome}/>, label: "Đồ gia dụng, Điện tử",   img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:90:0/q:90/plain/https://cellphones.com.vn/media/tmp/catalog/product/g/i/giadung-nha-thong-minh.png" } ,
            {  id: 4,icon:  <FontAwesomeIcon icon={faTv} />,      label: "Tivi" ,   img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:90:0/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/b/mb-laptop.png"} ,
            { id: 5, icon:  <FontAwesomeIcon icon={faDesktop} />, label: "Máy Tính" ,   img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:90:0/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/b/mb-laptop.png"} ,
            { id: 6, icon:  <FontAwesomeIcon icon={faHeadphones} />, label: "Phụ kiện, Tai nghe" ,   img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:90:0/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/b/mb-accessories.png"} ,
            {  id: 7,icon:  <FontAwesomeIcon icon={faClock} />, label: "Đồng hồ",   img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:90:0/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/o/dong-ho.png" } ,
            {  id: 8,icon: <FontAwesomeIcon  icon={ faSnowflake} />, label: "Điện tử, máy lọc nước",   img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:90:0/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/b/mb-laptop.png"},
            { id: 9, icon:  <FontAwesomeIcon icon={faNewspaper} />, label: "Tin công nghệ" , } ,    
    ]
        const Listitem = [
        { id: 0, items: Link_phone },
        { id: 1, items: Link_laptop},
        { id: 2, items: Link_camera},
        { id: 3, items: Link_LInk_householdAppliances},
        { id: 4, items: Link_television},
        { id: 5, items: Link_computer},
        { id: 6, items: Link_earphone},
        { id: 7, items: Link_clock},
        { id: 8, items: Link_waterfilter},
        { id: 9, items: Link_laptop},
    ]

export default items;
export {Listitem}
