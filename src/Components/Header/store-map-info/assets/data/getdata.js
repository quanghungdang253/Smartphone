import img1 from '../image/fix.jpg';
import img2 from '../image/iconStore.jpg';
import img3 from '../image/imageStore.jpg';
import img4 from '../image/imgUser.jpg';
import img5 from '../image/img8.jpg';
import img6 from '../image/image6.jpg';
import img9 from '../image/img9.jpg';
import img10 from '../image/img10.jpg';
import img11 from '../image/img6.jpg';





function Getdata(props) {
    let staticData = [
        {id: 0, text: "30 cửa hàng ",image: img2},
        {id: 1, text:">1 Triệu người đăng ký", image:img4}  ,
        {id: 2, text:"26 cửa hàng Dịch vụ sữa chữa và chăm sóc", image:img1} 
    ]
    let text = "Quang Hùng Store là hệ thống bán lẻ chính hãng các sản phẩm Apple, Samsung, Xiaomi, OPPO , ASUS, Sony, Lenovo, JBL,… với hơn 30 cửa hàng toàn quốc, đa dạng các thiết bị Điện thoại - Máy tính - Phụ kiện - Gia dụng - TV có giá bán tốt nhất và luôn có quầy trải nghiệm dùng thử.  Quang Hùng Store có chuỗi cửa hàng dịch vụ bảo hành và chăm sóc điện thoại - máy tính  với 26 cửa hàng. Quang Hùng Store cung cấp dịch vụ mua hàng trả góp 3 không: không trả trước - không lãi suất - không phụ phí và miễn phí giao hàng tại nhà."
    let img3D = [img3, img5,img6,img9,img11 , img10];
    return [staticData, text, img3D];
       
    
}

export default Getdata;

