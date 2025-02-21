import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';  // Dùng để tùy chỉnh icon marker
import 'leaflet/dist/leaflet.css';  // Nhớ import CSS của Leaflet

import './map.css'; // Import tệp CSS để áp dụng style

const Map = () => {
  const [location, setLocation] = useState(null);

  const getCoordinates = (address) => {
    const url = `https://nominatim.openstreetmap.org/search?q=${address}&format=json&addressdetails=1`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          const lat = data[0].lat;
          const lon = data[0].lon;
          setLocation([lat, lon]);
        }
      })
      .catch((error) => console.error('Error:', error));
  };

  useEffect(() => {
    getCoordinates('Thị trấn Ea T’ling, huyện Cư Jút, tỉnh Đắk Nông');  // Địa chỉ của thị trấn
  }, []);

  if (!location) return <div>Loading...</div>;

  // Tạo biểu tượng tùy chỉnh (Biểu tượng cửa hàng hoặc khinh khí cầu)
  const customIcon = new L.DivIcon({
    className: 'custom-icon',  // Thêm className để áp dụng CSS
    html: `<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAA7VBMVEX////k7vyFrfE0geoUceiStfeOtPIAZuYAbecac+gzffAqe/Odvflwm+cAa+pChfR+qff2qKHSOkYwb9j+9vbpJgvqPi/qQSdXacRRjfVCg/oajKz1/PL2t7PpNSTqQzWBaK7A2P8+kMkipTuz27zwf3f/06K1zPpAi9s0qFMsp052wYnubGLpODb3ngD/++M0plwtpk5btnL0jRz7vAT+89bf6f8qnnDpMy3xeCX80Gcgo0btVhb7ugD8y1H+6bulwWq+sg393pfauBil1LD8xTTsug1AqU9RsmpXq0nm9Op0rUDF5M3E05iSzKBcyPClAAAA70lEQVR4AWKgOQC0PhaJDcQwAFS6YWZmlsOM7pbD+f9zuvJNzuaWuRhG6HgznE7D5bBzbo/X6XP6/YHgowuFfRb+SCQSiOouFk84LRkh9NxkKp3JOp25HKXmC0UmS+VKulytAdQsV280mWylK5Vym26dQBdFj8l+ujIYjtRCxlhMppoczOYLui1XAjXZWm/m8y3dejvECS9b2s/nc/lumh8CEXdNvoqcE/JzgiSB80VWfqNyP6DxK+fy70BucgSd0VzOT6g4wwOmvCi1u4INt51yd7BlOkG2P+MsEMUZnnAXghflqTyRczzCc85neA3/bO8jQZ8yDjIAAAAASUVORK5CYII=" alt="store-icon" />`,  // Đường dẫn đến ảnh icon cửa hàng
    iconSize: [40, 40],  // Kích thước biểu tượng
    iconAnchor: [20, 40],  // Vị trí neo của biểu tượng
    popupAnchor: [0, -40],  // Vị trí hiển thị popup
  });

  return (
    <div style={{ height: '100vh' }}>
      <MapContainer center={location} zoom={13} style={{ width: '100%', height: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Thêm marker với custom icon */}
        <Marker position={location} icon={customIcon}>
          <Popup>
            Đây là Thị trấn Ea T’ling, huyện Cư Jút, tỉnh Đắk Nông.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
