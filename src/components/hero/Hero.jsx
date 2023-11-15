import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Ajay Kusekar</motion.h2>
          
          <motion.url>
        <div className="social">
          <a href="https://www.codingninjas.com/studio/profile/df49b772-6c60-4165-91c8-cf199cb7a0af" target="Window2">
            <img src="/codingninjas.jpg" alt="" />
          </a>
          <a href="https://auth.geeksforgeeks.org/user/ajaykusekar/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user" target="Window2">
            <img src="GeeksforGeeks (1).png" alt="" />
          </a>
          <a href="https://www.hackerrank.com/profile/ajay_kusekar2003" target="Window2">
            <img src="hackerrank.png" alt="" />
          </a>
          <a href="https://leetcode.com/user4586Dw/" target="Window2">
            <img src="leetcode.png" alt="" />
          </a>
        </div>
          </motion.url> 
          <motion.h1 variants={textVariants}>
            Web developer and designer && C++ programmer
          </motion.h1>
          {/* <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              See the Latest Works
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div> */}

          {/* <div>
          <button className="ajay">
              See My Work
              </button>
              &emsp;
              <button className="ajay">
                Contact Me
                </button>
          </div> */}
         

          <motion.img
            className="scroll"
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Be Creative
      </motion.div>
      <div className="imageContainer">
                                                              {/* /hero.png  */}
        <img src="ajay4.jpg" alt="" />              
      </div>
    </div>
  );
};

export default Hero;
