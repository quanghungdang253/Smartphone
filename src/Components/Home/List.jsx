import React from "react";
import { useEffect , useState } from "react";
import PropsType from "prop-types"  
import { Link } from "react-router-dom";
PropsType.propsType = {
    listcar: PropsType.array
}
PropsType.default = {
    listcar: []
}
function List(props) {
    const URL = "/data.json";

    const [listcar,Setcar] = useState([])

   
            const FetchData = async(URL) => {
                    return (await fetch(URL)).json();
            }
    

            const FetchCar = async() => {
                   const data = await FetchData(URL);
                    Setcar(data);
                   
            }
          useEffect(() => {
            FetchCar();
          },[])
   


    return (
        <div>
            <ul> 
                {listcar.map((listcar) => (
                 <li key={listcar.id}> 
                    <Link to={`/listcard/${listcar.id}`}> {listcar.name}  </Link>
              
                    </li>
                ))}   
            </ul>      
        </div>
    );
}

export default List;



