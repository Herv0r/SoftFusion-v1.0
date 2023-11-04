import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas, StarsCanvas } from "./canvas";
import Logo3d from "../assets/Logo3d.svg";
import LogoRosaBR from "../assets/LogoRosaBR.svg";
import Tilt from "react-parallax-tilt";
import Typewriter from "typewriter-effect";


const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg-stars-bg bg-no-repeat bg-cover">
     
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col lg:flex-row items-center gap-5`}>
        <div className="w-full lg:w-1/2">
          <h1 className={`${styles.heroHeadText} text-white text-center lg:text-left`}>
            Hi <span className="text-pink">!</span> we're
              <Typewriter options={{ wrapperClassName: "text-[#FF006C]", loop: true }} onInit={(typewriter) => {
                typewriter
                  .typeString("SOFTFUSION")
                  .pauseFor(2000)
                  .deleteAll()
                  .pauseFor(1000)
                  .start();
              }} />
          </h1>
          <p className="mt-2 text-white-100 text-center lg:text-left text-[20px] ">
              Construye tu futuro empresarial con nosotros
          </p>
        </div>

        <div className="w-1/2 lg:w-1/2 h-cover">
            <img
              src={Logo3d}
              alt="LogoRosa"
              className="w-[500px] mx-auto"
            />
        </div>
        
      </div>  

    </section>


  );
};

export default Hero;
