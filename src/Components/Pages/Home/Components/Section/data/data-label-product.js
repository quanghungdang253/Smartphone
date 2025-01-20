import { easing } from "@mui/material";

let product = [
        {id: 0, name:  "laptop", category: "Laptop"},
        {id: 1, name:  "household_appliances", category: "Đồ gia dụng"},
        {id: 2, name:  "Loa", category: "Loa"},
        {id: 3, name:  "earphone", category: "Tai nghe"},
        {id: 4, name:  "washing_machine", category:"Máy giặt"},
        {id: 5, name:  "smartphone", category: "SmartPhone"},
        {id: 6, name:  "clock", category:"Đồng Hồ"},
        {id: 7, name: "electric_cooker", category: "Nồi cơm điện"},
        {id: 8, name: "oil-free_fryer", category: "Nồi chiên không dầu"},
        {id: 9, name:  "tivi", category: "Tivi"},
        {id: 10, name: "water_purifier", category: "Máy lọc nước"},
        {id: 11, name:  "camera", category: "Camera"},
        {id: 12, name: "refrigerator", category: "Tủ đông"},
        {id: 13, name: "water_purifier", category: "Máy lọc nước"},
        {id: 14, name: "vacuum_leaner", category: "Máy hút bụi"},
        {id: 15, name: "refrigerator", category: "Tủ đông"},
        {id: 16, name:  "linen_cabinet", category: "Tủ lạnh"},
        {id: 17, name: "hot_water_dryer", category: "Máy nước nóng"},
        {id: 18, name:  "Loa", category: "Loa"},
        {id: 19, name:  "linen_cabinet", category: "Tủ lạnh"},
        {id: 20, name:  "washing_machine", category:"Máy giặt"},
        {id: 21, name: "vacuum_leaner", category: "Máy hút bụi"},
        {id: 22, name: "electric_cooker", category: "Nồi cơm điện"},
        {id: 23, name: "hot_water_dryer", category: "Máy nước nóng"},
        {id: 24, name: "oil-free_fryer", category: "Nồi chiên không dầu"},
]

let object_image = {};
product.forEach((product) => {
        object_image[product.name] = {
              image: require(`../image/image_label_product/${product.name}.jpg`),
              category: product.category               
        } 
})
console.log( Object.entries(object_image));
export default object_image;
