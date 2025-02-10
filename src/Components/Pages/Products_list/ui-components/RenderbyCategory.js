import React, { useState } from 'react';
import { SamsungComponent,OppoComponent, hotSaleComponent , DefaultComponent,} from './HandleComponent';
import { RenderProduct } from '../../../Common/componentEnpoint';
import { faL } from '@fortawesome/free-solid-svg-icons';
    import { Toggle } from '../../Home/Components/Section/form-section';
    import { useToggle } from '../context/context-boolean';
    const ComponentMap = {
        "samsung": SamsungComponent,
        "oppo": OppoComponent,

    }
    function RenderbyCategory( { namephone,logic, data, ...props }) {
       console.log(logic);
         
        const SelectedComponent = (ComponentMap[namephone])|| (logic ? hotSaleComponent : DefaultComponent);
        return <SelectedComponent data={data} namephone={namephone} {...props} />;
    }
export default RenderbyCategory;
