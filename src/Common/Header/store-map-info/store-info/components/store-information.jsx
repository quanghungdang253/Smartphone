import React from 'react';
import styled from './store-information.module.scss';
import { useRef } from 'react';
import { useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from "three";
import { OrbitControls } from '@react-three/drei';

import Getdata from './getdata';

let [staticData, text, img3D] = Getdata();
const imageOptions = {
    inside: img3D[0],
    inside_1: img3D[2],
    inside_2: img3D[3],
    inside_3: img3D[1],
    inside_4: img3D[4],
    outside: img3D[3],
};

const OscillatingSphere = ({ imgSrc, rotationSpeed, isPaused }) => {
    const sphereRef = useRef();
    let time = useRef(0);

    useFrame(() => {
        if (sphereRef.current && !isPaused) {
            time.current += 0.05;
            sphereRef.current.rotation.y += rotationSpeed;
        }
    });

    const texture = new THREE.TextureLoader().load(imgSrc);
    return (
        <mesh ref={sphereRef}>
            <sphereGeometry args={[10, 50, 50]} />
            <meshBasicMaterial map={texture} side={THREE.BackSide} />
        </mesh>
    );
};

const Image3d = () => {
    const [selectedImage, setSelectedImage] = useState(imageOptions.inside);
    const [rotationSpeed, setRotationSpeed] = useState(0.005);
    const [isPaused, setIsPaused] = useState(false);

    return (
        <div className={styled.mainImg3D}>
            {/* Thanh công cụ điều khiển */}
            <div className={styled.toolbar}>
                <button onClick={() => setIsPaused(!isPaused)}>
                    {isPaused ? "Tiếp tục" : "Tạm dừng"}
                </button>
                <button onClick={() => setRotationSpeed((prev) => Math.min(prev + 0.002, 0.02))}>
                    Tăng tốc
                </button>
                <button onClick={() => setRotationSpeed((prev) => Math.max(prev - 0.002, 0))}>
                    Giảm tốc
                </button>
                <button onClick={() => setRotationSpeed(0.005)}>Đặt lại tốc độ</button>
            </div>

            {/* Buttons để đổi ảnh */}
            <div className="controls">
                <button onClick={() => setSelectedImage(imageOptions.outside)}>Cửa hàng bên ngoài</button>
                <button onClick={() => setSelectedImage(imageOptions.inside)}>Cửa hàng bên trong</button>
                <button onClick={() => setSelectedImage(imageOptions.inside_1)}>Cửa hàng bên trong</button>
                <button onClick={() => setSelectedImage(imageOptions.inside_2)}>Cửa hàng bên trong</button>
                <button onClick={() => setSelectedImage(imageOptions.inside_3)}>Cửa hàng bên trong</button>
                <button onClick={() => setSelectedImage(imageOptions.inside_4)}>Cửa hàng bên trong</button>
            </div>

            {/* Canvas hiển thị ảnh 3D */}
            <div className={styled.canvasContainer}>
                <Canvas>
                    <OrbitControls               
                        enableZoom={true} 
                        zoomSpeed={2}/>
                    <OscillatingSphere imgSrc={selectedImage} rotationSpeed={rotationSpeed} isPaused={isPaused} />
                </Canvas>
            </div>
        </div>
    );
};
export {Image3d};