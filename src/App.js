import "./App.css";
import Header from "./Header";
import Lottie from "lottie-react";
import Ani from "./sixani.json";
import Main from "./Main";
import Footer from "./Footer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

function App() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <>
      <div className="gradient-background"></div>

      <Header />

      <motion.div
        style={{
          display: "flex",
          alignItems: "center",
          marginLeft: "5%",
          marginTop: "5%",
        }}
        initial={{ opacity: 0, y: 100 }} // Initial state (hidden)
        animate={controls} // Animation controls
        transition={{ duration: 0.6 }} // Animation duration
      >
        <motion.p
          style={{ color: "white", fontSize: "45px" }}
          initial={{ opacity: 0, y: 50 }} // Initial state (hidden)
          animate={{ opacity: 1, y: 0 }} // Animation on scroll
        >
          <b>
            <i>"Turning Dreams into Financial Reality"</i>
          </b>
        </motion.p>

        <div style={{ width: "30%", height: "10%" }}>
          <Lottie animationData={Ani} />
        </div>
      </motion.div>

      <Main />

      <Footer />
    </>
  );
}

export default App;
