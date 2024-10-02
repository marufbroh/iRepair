import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <header className="h-16">
      <nav className="flex justify-between items-center h-full w-full max-w-[1220px] mx-auto px-5">
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
    </header>
  );
};

export default Navbar;
