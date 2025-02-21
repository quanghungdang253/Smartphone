import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import Getdata from '../../assets/data/getdata';
import * as THREE from "three";
import styled from '../styles/image3D.module.scss';
import { useState } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

    let [staticData, text, img3D] = Getdata();
    const imgOption = {
        outside: img3D[3],
        inside: img3D[0],
        inside_2: img3D[1],
        inside_3: img3D[2],
        inside_4: img3D[4],
        inside_5: img3D[5],
    }
  let  OscillatingSphere = ({imgSrc , rotationSpeed , isPaused}) => {
            const sphereRef = useRef();
            let time = useRef(0);
            useFrame(() => {
                    if(sphereRef.current && !isPaused){
                        time.current += 0.05;
                        sphereRef.current.rotation.y += rotationSpeed;
                    }
            });
            
            const texture = new THREE.TextureLoader().load(imgSrc);

            return (
                <mesh ref={sphereRef}>
                        <sphereGeometry args={[10 , 50, 50]}/>
                        <meshBasicMaterial map={texture} side={THREE.BackSide}/>
                </mesh>
            )
  }
  const Image3d = () => {
    const [selectedImage, setSelectedImage] = useState(imgOption.inside);
    const [rotationSpeed, setRotationSpeed] = useState(0.005);
    const [isPaused, setIsPaused] = useState(false);

  
    return (
        <div className={styled.canvasContainer}>
         <div className={styled.tabControls}>   
                <div className={styled.btnNavigation}>
                        <Link> 
                        <FontAwesomeIcon icon={faArrowLeft} />
                        </Link>
                </div>
         
         </div>
             <Canvas>
                    <OrbitControls enableZoom={true} zoomSpeed={0.5}/>
                    <OscillatingSphere imgSrc={selectedImage} rotationSpeed={rotationSpeed} isPaused={isPaused}/>
             </Canvas>
        </div>
    );
}

export default Image3d;