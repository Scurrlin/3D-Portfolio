import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/'>
        <img src={logo} alt='logo' className='w-18 h-18 object-contain' />
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <a href="https://drive.google.com/file/d/1bIeq3KNMCQ9EL5IgcCIQ96Jc7JpCdx81/view?usp=sharing" target='_blank' rel='noopener noreferrer' className="text-black">
          Resume
        </a>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projects
        </NavLink>
        <NavLink to='/contact' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;