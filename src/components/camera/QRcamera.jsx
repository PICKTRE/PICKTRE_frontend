import { useEffect, useRef, useState } from "react";
import {
  BrowserMultiFormatReader,
  BarcodeFormat,
  DecodeHintType,
} from "@zxing/library";
import cameraCapture from "../../assets/camera_capture.png";
import classes from "./QRcamera.module.css";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const QRcamera = () => {
  const [localStream, setLocalStream] = useState(null);
  const Camera = useRef(null);
  const [text, setText] = useState("");

  const hints = new Map();
  const formats = [
    BarcodeFormat.QR_CODE,
    BarcodeFormat.DATA_MATRIX,
    BarcodeFormat.CODE_128,
    BarcodeFormat.CODABAR,
    BarcodeFormat.EAN_13,
    BarcodeFormat.EAN_8,
    BarcodeFormat.CODE_39,
    BarcodeFormat.CODE_93,
  ];
  hints.set(DecodeHintType.POSSIBLE_FORMATS, formats);

  const Scan = new BrowserMultiFormatReader(hints, 500);

  useEffect(() => {
    // 카메라 스트림을 시작하고 종료 시 정리하는 함수
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" }, // 'user'로 변경하면 프론트 카메라 사용
        });
        setLocalStream(stream);
      } catch (error) {
        console.error("카메라 접근 오류:", error);
      }
    };

    startCamera();

    return () => {
      Stop();
    };
  }, []);

  useEffect(() => {
    // 카메라에서 QR 코드를 스캔하고 종료 시 정리하는 함수
    const startScanning = async () => {
      if (!Camera.current) return;

      if (localStream && Camera.current) {
        try {
          await Scan.decodeFromStream(localStream, Camera.current, (data) => {
            if (data) {
              setText(data.getText());
            } else {
              setText("");
            }
          });
        } catch (error) {
          console.error("스캔 오류:", error);
        }
      }
    };

    startScanning();

    return () => {
      Stop();
    };
  }, [localStream]);

  // 카메라 스트림 종료 함수
  const Stop = () => {
    if (localStream) {
      const vidTrack = localStream.getVideoTracks();
      vidTrack.forEach((track) => {
        track.stop();
        localStream.removeTrack(track);
      });
      setLocalStream(null);
    }
  };

  // 페이지 컨텐츠의 애니메이션 효과
  const contentVariants = {
    hidden: {
      opacity: 0.3,
    },
    visible: {
      opacity: 1,
      transition: { delay: 0.3, duration: 0.3 },
    },
  };

  return (
    <>
      <Header />
      <motion.main
        className={classes.container}
        variants={contentVariants}
        initial="hidden"
        animate="visible"
      >
        <video
          ref={Camera}
          id="video"
          autoPlay
          playsInline
          muted
          style={{ width: "390px", height: "665px" }}
        />
        <img src={cameraCapture} alt="이미지" className={classes.camera} />
        {text && (
          <Link to={text} target="_blank" rel="noopener noreferrer">
            {text}
          </Link>
        )}
      </motion.main>

      <Footer />
    </>
  );
};

export default QRcamera;
