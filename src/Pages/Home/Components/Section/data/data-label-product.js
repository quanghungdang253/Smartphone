import { easing } from "@mui/material";

let product = [
        {id: 0, name:  "laptop", category: "Laptop" , sale: "Hot"},
        {id: 1, name:  "household_appliances", category: "Đồ gia dụng", sale: "-40%"},
        {id: 2, name:  "Loa", category: "Loa", sale: "30%" ,sale: "-20%"},
        {id: 3, name:  "earphone", category: "Tai nghe", sale:"Hot"},
        {id: 4, name:  "washing_machine", category:"Máy giặt",  sale:"Hot"},
        {id: 5, name:  "smartphone", category: "SmartPhone",  sale:"Hot"},
        {id: 6, name:  "clock", category:"Đồng hồ", sale: "-10%"},
        {id: 7, name: "electric_cooker", category: "Nồi cơm điện",sale: "Hot"},
        {id: 8, name: "oil-free_fryer", category: "Nồi chiên không dầu",sale: "Hot"},
        {id: 9, name:  "tivi", category: "Tivi",sale: "-40%"},
        {id: 10, name: "water_purifier", category: "Máy lọc nước",sale: "-40%"},
        {id: 11, name:  "camera", category: "Camera",sale: "-40%"},
        {id: 12, name: "refrigerator", category: "Tủ đông",sale: "-40%"},
        {id: 13, name: "water_purifier", category: "Máy lọc nước", sale:"Hot"},
        {id: 14, name: "vacuum_leaner", category: "Máy hút bụi",sale: "-40%"},
        {id: 15, name: "refrigerator", category: "Tủ đông", sale:"Hot"},
        {id: 16, name:  "linen_cabinet", category: "Tủ lạnh",sale: "-40%"},
        {id: 17, name: "hot_water_dryer", category: "Máy nước nóng",sale: "-40%"},
        {id: 18, name:  "Loa", category: "Loa",sale: "-40%"},
        {id: 19, name:  "linen_cabinet", category: "Tủ lạnh", sale:"Hot"},
        {id: 20, name:  "washing_machine", category:"Máy giặt",sale: "-40%"},
        {id: 21, name: "vacuum_leaner", category: "Máy hút bụi"},
        {id: 22, name: "electric_cooker", category: "Nồi cơm điện", sale:"Hot"},
        {id: 23, name: "hot_water_dryer", category: "Máy nước nóng",sale: "-40%"},
        {id: 24, name: "oil-free_fryer", category: "Nồi chiên không dầu",sale: "-40%"},
]

let object_image = {};
product.forEach((product) => {
        object_image[product.name] = {
              image: require(`../image/image_label_product/${product.name}.jpg`),
              category: product.category,
              sale: product.sale               
        } 
})
console.log( Object.entries(object_image));
export default object_image;
