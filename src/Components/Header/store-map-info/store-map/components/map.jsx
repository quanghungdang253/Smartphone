import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import styles from "../styles/map.module.scss";
import imgFix from '../../assets/image/fix.jpg';
import { useEffect, useState } from "react";

// Danh sách địa điểm
const locations = [
  { name: "Thị trấn Ea T’ling, huyện Cư Jút, tỉnh Đắk Nông", lat: 12.7453, lon: 107.6867 },
  { name: "Hồ Hoàn Kiếm, Hà Nội", lat: 21.0285, lon: 105.8542 },
  { name: "Nhà Thờ Đức Bà, TP Hồ Chí Minh", lat: 10.7794, lon: 106.6992 },
  { name: "Linh Tây, Thủ Đức TP Hồ Chí Minh", lat: 10.865492, lon: 106.759284 },
  { name: "Tọa độ tùy chỉnh", lat: 10.865513, lon: 106.759305 }
];

const locations_1 = [
  { name: "Điện thoại 24h Gò Vấp", lat: 10.821052, lon: 106.759284 },
  { name: "Hồ Hoàn Kiếm, Hà Nội", lat: 21.0285, lon: 105.8542 },
  { name: "Nhà Thờ Đức Bà, TP Hồ Chí Minh", lat: 10.7794, lon: 106.6992 },
  { name: "Linh Tây, Thủ Đức TP Hồ Chí Minh", lat: 10.865492, lon: 106.759284 },
  { name: "Tọa độ tùy chỉnh", lat: 10.865513, lon: 106.759305 }
];

const locations_2 = [
  { name: "Sửa điện thoại Bình Tân", lat: 12.7453, lon: 107.6867 },
  { name: "Hồ Hoàn Kiếm, Hà Nội", lat: 21.0285, lon: 105.8542 },
  { name: "Nhà Thờ Đức Bà, TP Hồ Chí Minh", lat: 10.7794, lon: 106.6992 },
  { name: "Linh Tây, Thủ Đức TP Hồ Chí Minh", lat: 10.865492, lon: 106.759284 },
  { name: "Tọa độ tùy chỉnh", lat: 10.865513, lon: 106.759305 }
];

let arrayAddress = [locations, locations_1, locations_2];

let storeSystem = [
  { id: 0, name: "Hệ thống bán lẻ", img: imgFix },
  { id: 1, name: "Hệ thống sửa chữa điện thoại và máy tính", img: imgFix },
  { id: 2, name: "Hệ thống bảo hành ủy quyền của Apple", img: imgFix }
];

// Custom icon cho Marker
const customIcon = new L.DivIcon({
  className: "custom-icon",
  html: `<img src="https://upload.wikimedia.org/wikipedia/commons/e/ec/RedDot.svg" alt="marker-icon" width="40px"/>`,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

// Component cập nhật vị trí bản đồ
const ChangeMapView = ({ center }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, 15); // Di chuyển bản đồ đến vị trí mới
  }, [center, map]);
  return null;
};

const Map = () => {
  const [index, setIndex] = useState(0);

  // Lấy vị trí trung tâm của hệ thống được chọn
  const center = [
    arrayAddress[index][0].lat, 
    arrayAddress[index][0].lon
  ];

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Vui lòng chọn hệ thống cửa hàng</h1>
        <div className={styles.selector}>
          {storeSystem.map((item) => (
            <label key={item.id}>
              <div className={styles.selectorChild}>
                <input
                  type="radio"
                  checked={index === item.id}
                  className={styles.input}
                  name="options"
                  onChange={() => setIndex(item.id)}
                />
                <div className={styles.selectorChild_1}>
                  <img src={item.img} alt="" className={styles.img} />
                  <p className={styles.paragrap}>{item.name}</p>
                </div>
              </div>
            </label>
          ))}
        </div>
      </div>

      <div className={styles.containerMap}>
        <MapContainer center={center} zoom={0} style={{ width: "100%", height: "500px", marginLeft: "auto" }}>
          <ChangeMapView center={center} /> {/* Cập nhật vị trí khi chọn hệ thống mới */}
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {arrayAddress[index].map((loc, idx) => (
            <Marker key={idx} position={[loc.lat, loc.lon]} icon={customIcon}>
              <Popup>{loc.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
