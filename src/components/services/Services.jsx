import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on Improving my skills
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <br />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Sharing</motion.b> My
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>Knowledge</motion.b> For you.
          </h1>
          <button>My Skills</button>
        </div>
      </motion.div>
      <br />
      <br />
      <br />
      <br />
      <br />


      <motion.div className="listContainer" variants={variants}>
        {/* <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        > */}

        <div className="icons">
          <marquee scrollamount="10">
          <div className="icons1">
          <img src="React-icon.svg.png" height={'50px'} width={'60px'}></img>&emsp;&emsp;&emsp;&emsp;&emsp;
          <img src="threejs.png" height={'50px'} width={'50px'}></img>&emsp;&emsp;&emsp;&emsp;&emsp;
          <img src="Nextjs-logo.svg.png" height={'50px'} width={'200px'}></img>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          <img src="javascript-logo-big.png" height={'50px'} width={'60px'}></img>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;

          <img src="1024px-HTML5_Badge.svg.png" height={'50px'} width={'60px'} className="icons2"></img>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          <img src="CSS3_logo.svg.png" height={'50px'} width={'60px'} className="icons2"></img>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          <img src="1667px-Figma-logo.svg.png" height={'50px'} width={'40px'} className="icons2"></img>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          <img className="icons2" src="2560px-Sass_Logo_Color.svg.png" height={'50px'} width={'80px'}></img>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          <img className="icons2" src="2560px-Node.js_logo.svg.png" height={'80px'} width={'130px'}></img>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          <img className="icons2" src="MongoDB_Logo.svg.png" height={'60px'} width={'210px'}></img>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          
          <img src="ISO_C++_Logo.svg.png" height={'50px'} width={'50px'} className="icons3"></img>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          <img src="4844510.png" height={'60px'} width={'60px'} className="icons3"></img>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          <img src="Python-logo-notext.svg.png" height={'50px'} width={'50px'} className="icons3"></img>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          
          <img src="Git-Icon-1788C.png" height={'50px'} width={'50px'} className="icons4"></img>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          <img src="GitHub.png" height={'50px'} width={'50px'} className="icons4"></img>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          <img src="Vercel_logo_black.svg.png" height={'50px'} width={'190px'} className="icons4"></img>
          </div>
          </marquee>
          
          {/* <h2>REACTJS, FIGMA, NEXTJS,<br /> THREEJS</h2> */}

        {/* </motion.div> */}
        {/* <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        > */}
        {/* <marquee direction="right" width="1000px" scrollamount="10">           
          <div className="icons2">
          <img src="1024px-HTML5_Badge.svg.png" height={'40px'} width={'50px'} className="icons2"></img>&emsp;&emsp;&emsp;&emsp;
          <img src="CSS3_logo.svg.png" height={'40px'} width={'40px'} className="icons2"></img>&emsp;&emsp;&emsp;&emsp;
          <img src="1667px-Figma-logo.svg.png" height={'50px'} width={'40px'} className="icons2"></img>&emsp;&emsp;&emsp;&emsp;
          <img className="icons2" src="png-clipart-sass-cascading-style-sheets-preprocessor-less-postcss-meng-miscellaneous-text-thumbnail.png" height={'50px'} width={'40px'}></img>&emsp;&emsp;&emsp;&emsp;
          </div>
          </marquee> */}
          {/* <h2>HTML, CSS, SASS, <br />JAVASCRIPT</h2> */}

        {/* </motion.div> */}
        {/* <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        > */}
        {/* <marquee scrolldelay="2sec" scrollamount="9">
          <div className="icons3">
          <img src="ISO_C++_Logo.svg.png" height={'50px'} width={'50px'} className="icons3"></img>&emsp;&emsp;&emsp;&emsp;
          <img src="4844510.png" height={'50px'} width={'40px'} className="icons3"></img>&emsp;&emsp;&emsp;&emsp;
          <img src="Python-logo-notext.svg.png" height={'50px'} width={'40px'} className="icons3"></img>&emsp;&emsp;&emsp;&emsp;
          </div>
          </marquee> */}
          {/* <h2>C++, JAVA,<br /> PYTHON</h2> */}

        {/* </motion.div> */}
        {/* <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        > */}
        {/* <marquee direction="right" scrollamount="8">
          <div className="icons4">
          <img src="Git-Icon-1788C.png" height={'50px'} width={'50px'} className="icons4"></img>&emsp;&emsp;&emsp;&emsp;
          <img src="GitHub.png" height={'50px'} width={'50px'} className="icons4"></img>&emsp;&emsp;&emsp;&emsp;
          <img src="Vercel_logo_black.svg.png" height={'50px'} width={'170px'} className="icons4"></img>&emsp;&emsp;&emsp;&emsp;
          </div>
          </marquee> */}
          {/* <h2>GIT, GITHUB, VERCEL</h2> */}

        {/* </motion.div> */}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
