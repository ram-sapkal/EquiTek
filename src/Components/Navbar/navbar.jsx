import React, {useState} from 'react'
import './navbar.css'
import logoColorEquiTek from '../../Assets/logo-colour-equitek.png'
import { IoIosCloseCircle } from "react-icons/io";
import { IoReorderThreeSharp } from "react-icons/io5";

export const Navbar = () => {

    const [active, setActive] = useState('navBar')
    //function to toggle navBar
    const showNav = () => {
        setActive('navBar activeNavbar')
    }

    //function to remove navBar
    const removeNavbar = () => {
        setActive('navBar')
    }

    const [selectedNavItem, setSelectedNavItem] = useState(1); 

    const handleNavSelect = (index) => {
      setSelectedNavItem(index);
    };

  return (
    <section className='navBarSection'>
        <header className='header flex'>

            <div className="logoDiv">
                <a href="#" className='logo flex' >
                    <h1><img src={logoColorEquiTek} alt="logo" className='icon'/> EquiTek</h1>
                </a>
                <div onClick={showNav} className="toggleNavbar">
                   <IoReorderThreeSharp className="icon" />
                </div>
            </div>

            <div className={active}>
                <ul className='navLists flex'>
                    <li className='navItem'>
                        <a href="#" className='navLink'  onClick={() => handleNavSelect(1)} >Home</a>
                        {selectedNavItem === 1 && <div className="txtUnderline"></div>}
                    </li>
                    <li className='navItem'>
                        <a href="#" className='navLink' onClick={() => handleNavSelect(2)} >About us</a>
                        {selectedNavItem === 2 && <div className="txtUnderline"></div>}
                    </li>
                    <li className='navItem'>
                        <a href="#" className='navLink' onClick={() => handleNavSelect(3)} >Products</a>
                        {selectedNavItem === 3 && <div className="txtUnderline"></div>}
                    </li>
                    <div onClick={removeNavbar} className="closeNavbar">
                       <IoIosCloseCircle className="icon"/>
                    </div>
                </ul>
            </div>

        </header>
    </section>
  )
};

export default Navbar;
