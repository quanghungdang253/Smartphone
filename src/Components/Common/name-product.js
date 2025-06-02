

    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import { faMobile, faClock, faCogs, faDesktop, faLaptop, faHome, faHeadphones, faCamera, faTv, faNewspaper,  faSnowflake, faChevronRight  } from '@fortawesome/free-solid-svg-icons';
import Link_phone from './data/Link_phone.json';
import  Link_laptop from './data/Link_laptop.json';
import Link_camera from './data/Link_camera.json';
import Link_earphone from './data/Link_earphone.json';
import Link_clock from './data/Link_clock.json';
import Link_television from './data/Link_Television.json';
import Link_waterfilter from './data/Link_waterfilter.json';
import Link_computer from './data/Link_computer.json';
import Link_LInk_householdAppliances from './data/LInk_householdAppliances.json';
import { listClasses } from '@mui/material';

      const items = [
            { id: 0, icon:  <FontAwesomeIcon icon={faMobile} />, label: "Điện thoại, Tabled" } ,
            {  id: 1,icon: <FontAwesomeIcon  icon={faLaptop}/> , label:"Laptop"},
            { id: 2, icon:  <FontAwesomeIcon icon={faCamera}/>, label:  "Camera Flycam" } ,
            { id: 3, icon:  <FontAwesomeIcon icon={ faHome}/>, label: "Đồ gia dụng, Điện tử" } ,
            {  id: 4,icon:  <FontAwesomeIcon icon={faTv} />,      label: "Tivi" } ,
            { id: 5, icon:  <FontAwesomeIcon icon={faDesktop} />, label: "Máy Tính" } ,
            { id: 6, icon:  <FontAwesomeIcon icon={faHeadphones} />, label: "Phụ kiện, Tai nghe" } ,
            {  id: 7,icon:  <FontAwesomeIcon icon={faClock} />, label: "Đồng hồ" } ,
            {  id: 8,icon: <FontAwesomeIcon  icon={ faSnowflake} />, label: "Điện tử, máy lọc nước"},
            { id: 9, icon:  <FontAwesomeIcon icon={faNewspaper} />, label: "Tin công nghệ" } ,    
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
