import Products_list from "../Pages/Products_list/Products_list"
import InforPhone from "../Pages/InforPhone/InforPhone"
import MainStoreInfo from "../Common/Header/store-map-info/main-store-info";
import Home from "../Pages/Home/Home";
import MainStoreMapInfo from "../Common/Header/store-map-info/main-store-map"
import MainCart from "../Pages/cart-pages/main-cart/main-cart";
import MainLogin from "../Pages/login/main-login";
import MainAdmin from "../Pages/admin/main-admin";
import LookUpOrders from "../Pages/look-up-orders/look-up-orders";
import ShowProduct from "../Pages/look-up-orders/components/show-product/show-product";


let router = [
    {
        id: 0, path: "/", element: Home
    },
    {
        id: 1, path: "label/:namephone", element: Products_list
    },
    {
         id: 2, path: "/Detail/:link/:id", element: InforPhone
    },
    {
         id: 3, path: "/StoreInfo", element: MainStoreInfo
    },
    {
         id: 4, path: "/GoogleMap", element: MainStoreMapInfo
    },
    {
         id: 5, path: "/Cart", element: MainCart
    },
    {
         id: 6, path: "/Login", element: MainLogin
    },
    {
         id: 7, path: "/Admin", element: MainAdmin
    },
    {
         id: 8, path: "/LookProduct", element: LookUpOrders
    },
     {
         id: 9, path: "/ShowProduct", element: ShowProduct
    }
]


export default router;