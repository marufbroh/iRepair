import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.header
      className="h-16 fixed w-full bg-white z-[999]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <nav className="flex justify-between items-center h-full w-full max-w-[1230px] mx-auto px-5">
        <span className="text-3xl">iRepair</span>
        <ul className="flex gap-5 items-center">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <Button>
              <NavLink to={"/login"}>Login</NavLink>
            </Button>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Navbar;
