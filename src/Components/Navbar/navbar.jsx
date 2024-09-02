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

  return (
    <section className='navBarSection'>
        <header className='header flex'>

            <div className="logoDiv">
                <a href="#" className='logo flex'>
                    <h1><img src={logoColorEquiTek} alt="logo" className='icon'/> EquiTek</h1>
                </a>
            </div>

            <div className={active}>
                <ul className='navLists flex'>
                    <li className='navItem'>
                        <a href="#" className='navLink'>Home</a>
                    </li>
                    <li className='navItem'>
                        <a href="#" className='navLink'>About us</a>
                    </li>
                    <li className='navItem'>
                        <a href="#" className='navLink'>Products</a>
                    </li>
                    <div onClick={removeNavbar} className="closeNavbar">
                     <IoIosCloseCircle className="icon"/>
                </div>
                </ul>
            </div>

            <div onClick={showNav} className="toggleNavbar">
                <IoReorderThreeSharp className="icon" />
            </div>

        </header>
    </section>
  )
}

export default Navbar;
