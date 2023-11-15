import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { color, motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span whileHover={{color : "Orange"}}><span className="port">Port</span>folio</motion.span>
        </motion.span>
        <div className="social">
          <a href="https://www.facebook.com/ajay.kusekar/" target="Window2">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://www.instagram.com/_ajay_kusekar_/" target="Window2">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/ajay-kusekar-6b748b22a/" target="Window2">
            <img src="/Linkedin.webp" alt="" />
          </a>
          <a href="https://github.com/AjayKusekar" target="Window2">
            <img src="/GitHub.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
