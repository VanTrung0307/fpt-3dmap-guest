/* eslint-disable no-unused-vars */
import { Html, useProgress } from "@react-three/drei";
import "../Loader/Loader.css";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="loader-container">
        <div className="loader-spinner"></div>
      </div>
      <p
        style={{
          fontSize: "14",
          color: "#f1f1f1",
          fontWeight: "800",
          marginTop: "10px",
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default Loader;
