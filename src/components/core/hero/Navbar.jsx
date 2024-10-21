import Sidebar from "../sidebar/Sidebar";
import { motion } from "framer-motion";
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar relative">
      {/* Sidebar */}
      <div className="absolute">
      <Sidebar/>

      </div>
      <div className="wrapper">
        <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
          Aeon Tech
        </motion.span>
        <div className="social">
          <a href="#">
            <p>Fb</p>
          </a>
          <a href="#">
          <p>ig</p>

          </a>
          <a href="#">
          <p>yt</p>

          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;