import InformationPhones from "../Components/informationPhone";

const Category_Name = ({Data}) => {

let Category_Name = [
            {id: 0, title: "Màn hình", content: Data.screen_size, },
            {id: 1, title: "Công nghệ màn hình", content: Data.screen_technology},
            {id: 2, title: "Camera Sau", content: Data.rear_camera},
            {id: 3, title: "Camera trước", content: Data.Front_camera},
            {id: 4, title: "Chipset", content: Data.Chipset},
            {id: 5, title: "Công Nghệ NFC ",content: Data.NFC_technology},
            {id: 6, title: "Bộ nhớ trong", content: Data.internal_memory},
            {id: 7, title: "Thẻ sim", content: Data.SIM_card},
            {id: 8, title: "Hệ điều hành ",content: Data.OperatingSystem},
            {id: 9, title: "Độ phân giải màn hình", content: Data.Screen_resolution},
            {id: 10, title: "Tính năng màn hình", content: Data.Screen_features},
            {id: 11, title: "Loại CPU", content: Data.CPU_Type},
            {id: 12, title: "Cân năng", content: Data.Weight},
            {id: 13, title: "Cổng sạc", content: Data.Charging_port}
          ]

        return Category_Name;

   
}

export default Category_Name;