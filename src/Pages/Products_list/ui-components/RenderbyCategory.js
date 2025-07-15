import React, { useEffect, useState } from 'react';
import { SamsungComponent,OppoComponent, hotSaleComponent , DefaultComponent, XiamioComponent , IphoneComponent, VivoComponent, IpadComponent} from './HandleComponent';
import { RenderProduct } from '../../../Common/componentEnpoint';
import { faL } from '@fortawesome/free-solid-svg-icons';
    import { Toggle } from '../../Home/Components/Section/form-section';
    import { useToggle } from '../context/context-boolean';

  
  
    let smartPhone = ["samsung","oppo","IPhone","Xiamio","vivo","Ipad","IPhone"];
    
    const ComponentMap = {
        "samsung": SamsungComponent,
        "oppo": OppoComponent,
        "IPhone": IphoneComponent,
        "Xiamio": XiamioComponent,
        "vivo":VivoComponent,
        "Ipad": IpadComponent,
        "IPhone": IphoneComponent,
        
        

    }
    function RenderbyCategory( { namephone,logic, data, ...props }) {
        const [storeName , setStoreName] = useState(null);
        useEffect(() => {
                    if(smartPhone.includes(namephone)) {
                                setStoreName(ComponentMap);
                    }
        },[namephone])
        const SelectedComponent = (storeName ?  storeName[namephone] :  ComponentMap[namephone]) || (logic ? hotSaleComponent : DefaultComponent);
      
        return (
                <div> 
                         <SelectedComponent data={data} namephone={namephone} {...props} />;
                
                </div>
        )
        
   
        
    }
export default RenderbyCategory;
