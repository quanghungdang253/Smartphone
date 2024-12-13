import React from 'react';
import { SamsungComponent,OppoComponent,DefaultComponent } from './HandleComponent';
const ComponentMap = {
    "samsung": SamsungComponent,
    "oppo": OppoComponent,
   
}

function RenderbyCategory({namephone , data ,  ...props}) {
 
    const SelectedComponent = ComponentMap[namephone] || DefaultComponent ; 

    return <SelectedComponent data={data} namephone={namephone} {...props} />

}

export default RenderbyCategory;