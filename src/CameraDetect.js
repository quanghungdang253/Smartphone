import React, { useRef, useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import '@tensorflow/tfjs';

const CameraDetect = () => {
  const webcamRef = useRef(null);
  const modelRef = useRef(null);
  const animationRef = useRef(null);
  const audioRef = useRef(null); // Ref để điều khiển âm thanh

  const [warning, setWarning] = useState(false);
  const [wasDetected, setWasDetected] = useState(false); // Tránh phát lặp âm thanh

  useEffect(() => {
    cocoSsd.load().then((loadedModel) => {
      modelRef.current = loadedModel;
      runDetection();
    });

    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  const runDetection = async () => {
    if (
      webcamRef.current &&
      webcamRef.current.video.readyState === 4 &&
      modelRef.current
    ) {
      const video = webcamRef.current.video;
      const predictions = await modelRef.current.detect(video);

      const hasAnyObject = predictions.length > 0;
      setWarning(hasAnyObject);

      // Phát âm thanh nếu có vật thể và chưa phát trước đó
      if (hasAnyObject && !wasDetected) {
        setWasDetected(true);
        audioRef.current?.play();
      }

      // Reset nếu không còn vật thể
      if (!hasAnyObject) {
        setWasDetected(false);
      }
    }

    animationRef.current = requestAnimationFrame(runDetection);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>🎥 Hệ thống cảnh báo vật thể</h2>

      <audio ref={audioRef} src="/sounds/alarm.mp3" preload="auto" />

      <div
        style={{
          display: 'inline-block',
          position: 'relative',
          border: warning ? '8px solid red' : '8px solid #ccc',
          borderRadius: '12px',
          transition: '0.2s ease',
        }}
      >
        <Webcam
          ref={webcamRef}
          audio={false}
          width={640}
          height={480}
          screenshotFormat="image/jpeg"
          videoConstraints={{
            facingMode: 'user',
          }}
          style={{ borderRadius: '5px' }}
        />

        {warning && (
          <div
            style={{
              position: 'absolute',
              top: 10,
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: 'red',
              color: 'white',
              fontSize:'30px',
              padding: '10px 20px',
              borderRadius: '8px',
              fontWeight: 'bold',
              fontSize: '18px',
              boxShadow: '0 0 10px rgba(0,0,0,0.5)',
              zIndex: 10,
            }}
          >
            ⚠️ PHÁT HIỆN XÂM NHẬP (CÚT RA CÚT RA )  !
          </div>
        )}
      </div>
    </div>
  );
};

export default CameraDetect;
