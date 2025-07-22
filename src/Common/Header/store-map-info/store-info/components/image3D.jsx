import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from "three";
import { OrbitControls, useSpriteAnimator } from '@react-three/drei';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faPlay } from '@fortawesome/free-solid-svg-icons';
import Getdata from '../../assets/data/getdata';
import styled from '../styles/image3D.module.scss';
import { useMemo } from 'react';
import { prettyDOM } from '@testing-library/react';
import { faCoffee, faHome , faVolumeUp, faVolumeDown, faVolumeMute} from '@fortawesome/free-solid-svg-icons';

import Audio from './audio';


let [staticData, text, img3D] = Getdata();
const imgOption = [ img3D[4], img3D[0],img3D[3],img3D[2],img3D[5],img3D[1]];
  


let OscillatingSphere = ({ imgSrc, rotationSpeed, isPaused, rotate }) => {
    const sphereRef = useRef();
    let time = useRef(0);
    
    useFrame(() => {
    if(rotate){
        if (sphereRef.current && !isPaused) {
            time.current += 0.05;
            sphereRef.current.rotation.y += rotationSpeed;
        }
    }
       
    });

   const texture = useMemo(() => new THREE.TextureLoader().load(imgSrc), [imgSrc]);

    return (
        <mesh ref={sphereRef}>
            <sphereGeometry args={[10, 50, 50]} />
            <meshBasicMaterial map={texture} side={THREE.BackSide} />
        </mesh>
    );
};

const Image3d = () => {

    const [rotationSpeed, setRotationSpeed] = useState(0.005);
    const [isPaused, setIsPaused] = useState(false);
    const [zoomLevel, setZoomLevel] = useState(10);
    const [indexImg , setIndexImg] = useState(0);

    const [selectedImage, setSelectedImage] = useState(imgOption[indexImg]);
    const [rotate , setRotate] = useState(true);
    const controlsRef = useRef();
    const [enable , setEnable] = useState(true);

    return (
        <div className={styled.canvasContainer}>
        <Audio enableAudio={enable} />
          <div className={styled.tabControls}>
            <div className={styled.btnNavigation}>
               

    <div className={`${styled.middleColumn}`}>
    <Link onClick={() => {
                    setIndexImg((pre) =>{
                                 const newIndex = pre <= 0 ? imgOption.length - 1 : pre - 1;
                                 setSelectedImage(imgOption[newIndex])
                        return newIndex;
                        } )}         
                }>
                        <FontAwesomeIcon icon={faArrowLeft} className={styled.icon}/>
                </Link>
         <div>    
                    <Link>
                        {enable ? (
                            <FontAwesomeIcon icon={faVolumeUp} onClick={() => setEnable(false)}  className={styled.icon}/> 
                        ) : (
                            <FontAwesomeIcon icon={faVolumeMute}  onClick={() => setEnable(true)}
                            className={styled.icon}

                            />
                        )}  
                                          
        </Link>
                    </div>
                    <div>  
                     <Link onClick={() => setRotate((pre) => !pre)}
                           className={styled.stopPlay}>
                          {rotate ? (<h1 className={styled.iconPlay}> || </h1>) : (<FontAwesomeIcon icon={faPlay} className={styled.icon}/>)}
                    </Link>
                    </div>
                    <div>         
                    <Link  onClick={() => {
                            setIndexImg((pre) =>{
                                 const newIndex = pre >= imgOption.length - 1 ? 0 : pre + 1;
                                 setSelectedImage(imgOption[newIndex])
                                return newIndex;
                        }
                             )
                        
                         }
                    }      
                > <FontAwesomeIcon icon={faArrowRight} className={styled.icon} />
                    </Link> 
                    </div> 
                                
                       
                </div>
               


               
                </div>
                <div className={styled.listBtn} >
                    {imgOption.map((Item,index) => (
                        <Link 
                            key={index} 
                            onClick={() =>    setSelectedImage(imgOption[index])}
                            className={styled.item}                       >
                                <img className={styled.item}  src={Item} alt='' />
                        </Link>
                    ))}
                </div>
            </div>

            <Canvas>
                <OrbitControls
                    minDistance={1}
                    maxDistance={10}
                    enableZoom={true}
                    zoomSpeed={0.5}
                    ref={controlsRef}
                    onChange={() => {
                        if (controlsRef.current) {
                            setZoomLevel(controlsRef.current.object.position.z);
                        }
                    }}
                />
                <OscillatingSphere imgSrc={selectedImage} rotationSpeed={rotationSpeed} isPaused={isPaused} rotate={rotate} />
            </Canvas>
        </div>
    );
};

export default Image3d;
