import Lottie from "lottie-react";
import Ani from "./secani.json";
import Anim from "./thirani.json";
import Anima from "./fourani.json";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

// ... (your other imports)

const AnimatedDiv = ({ children, delay }) => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > delay) {
        controls.start({ opacity: 1, y: 0 });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={controls}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

const Main = () => {
  return (
    <div>
      <AnimatedDiv delay={0}>
        {
          <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row align-items-center g-5 py-5">
              <div style={{ width: "50%", height: "30%" }}>
                <Lottie animationData={Ani} />
              </div>
              <div className="col-10 col-sm-8 col-lg-6">
                <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                  Future Growth and Innovation
                </h1>
                <p className="lead">
                  MoneyBuddy is a website which help the user to understand
                  his/her financial expenditure pattern and provide statistical
                  analysis which will help the use to grow financially
                </p>
              </div>
            </div>
          </div>
        }
      </AnimatedDiv>

      <AnimatedDiv delay={500}>
        {
          <div className="container px-4 py-5" id="custom-cards">
            <h1 className="pb-2 border-bottom">Features that we offer</h1>
            <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
              <div className="col">
                <div
                  className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                  style={{ backgroundImage: 'url("unsplash-photo-1.jpg")' }}
                >
                  <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                    <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                      Expense Tracking
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                  style={{ backgroundImage: 'url("unsplash-photo-2.jpg")' }}
                >
                  <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                    <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                      Financial Goal Setting
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                  style={{ backgroundImage: 'url("unsplash-photo-3.jpg")' }}
                >
                  <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                    <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                      Bill Spliting
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </AnimatedDiv>

      <AnimatedDiv delay={1000}>
        {
          <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
              <div className="col-10 col-sm-8 col-lg-6">
                <Lottie animationData={Anim} />
              </div>
              <div className="col-lg-6">
                <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                  <b>Deep insights of your finance</b>
                </h1>
                <p>
                  An intuitive and user-friendly interface that caters to users
                  of varying technological proficiency. The platform should be
                  easy to navigate, requiring minimal training for users to
                  start effectively managing their finances.
                </p>
              </div>
            </div>
          </div>
        }
      </AnimatedDiv>

      <AnimatedDiv delay={1500}>
        {
          <div className="container col-l-2 px-5 py-5">
            <div className="row flex-lg-row align-items-center py-5">
              <div style={{ width: "40%", height: "20%" }}>
                <Lottie animationData={Anima} />
              </div>
              <div className="col-10 col-sm-8 col-lg-6">
                <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                  Be a Superman
                </h1>
                <p>
                  Advanced analytics tools provide insights into spending
                  patterns, habits, and financial progress. Users can set budget
                  limits for different categories and receive alerts when
                  nearing or exceeding those limits. Visual representations help
                  users grasp their financial health at a glance.
                </p>
              </div>
            </div>
          </div>
        }
      </AnimatedDiv>

      <AnimatedDiv delay={2000}>
        {
          <div className="container py-4">
            <h1>Customer Reviews</h1>
            <div className="row align-items-md-stretch">
              <div className="col-md-6">
                <div className="h-100 p-5 text-bg-dark rounded-3">
                  <h2>Ayrton Senna</h2>
                  <p>Amazing!!!</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="h-100 p-5 bg-body-tertiary border rounded-3">
                  <h2>M.Schumacher</h2>
                  <p>MoneyBuddy is better than my CA</p>
                </div>
              </div>
            </div>
          </div>
        }
      </AnimatedDiv>

      {/* ... Repeat the AnimatedDiv component for other divs as needed */}
    </div>
  );
};

export default Main;
