'use client'
import Image from 'next/image'
import Link from 'next/link';

// import './page.module.css'

// import React, { useState } from 'react'
import {useState} from 'react'
import {BsFillPersonFill} from 'react-icons/bs'
import {useWindowSize} from '../../hooks'
// import LogoImage from '../../public/assets/images/logo.png'
import LogoImage from '../../../public/assets/images/logo.png'
import {WindowSize} from '../../types'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillCloseCircle} from 'react-icons/ai'

// import {
//     CloseButtonContainer,
//     CloseIcon,
//     LogoContainer,
//     MenuIcon,
//     MenuLinkContainer,
//     Nav,
//     NavLinkContainer,
//     OverlayMenu
// } from './NavElements'

// import NavLink from './NavLink'
// import {encodePng} from "next/dist/server/lib/squoosh/impl";

const Navbar = () => {

    const size: WindowSize = useWindowSize()
    const [showMenu, setShowMenu] = useState(false)

    // const openMenu = () => {
    //     setShowMenu(true)
    // }
    //
    // const closeMenu = () => {
    //     setShowMenu(false)
    // }

    return (
        <>
            <nav className='navbar'>
                <div className='logo'>
                    <Link href="/">
                        <Image
                            src={LogoImage}
                            alt="logo"
                            width={50}
                            height={50}
                        />
                    </Link>
                </div>

                <div className='nlink'>
                    {
                        size.width > 768 ?
                            (<div className="links">
                                <Link href="/">
                                    Home
                                </Link>
                                <Link href="/products">
                                    Products
                                </Link>
                                <Link href="/sale">
                                    Sale
                                </Link>
                                <Link href="/profile">
                                    <BsFillPersonFill size={30}/>
                                </Link>
                            </div>)
                            : (
                                <div className="menu-icon" onClick={() => setShowMenu(!showMenu)}>
                                    <GiHamburgerMenu/>
                                    {/*<span>{repo.forks_count}</span>*/}
                                </div>)
                        // <MenuIcon
                        //     size={30}
                        //     onClick={openMenu}
                        // />
                    }
                </div>

                {
                    showMenu &&
                    <div className="overlay-menu">
                        <div className="containerisation" onClick={() => setShowMenu(!showMenu)}>
                            <AiFillCloseCircle/>
                            {/*<span>{repo.forks_count}</span>*/}
                        </div>


                        {/*<CloseIcon*/}
                        {/*    size={40}*/}
                        {/*    color={'white'}*/}
                        {/*    onClick={closeMenu}*/}
                        {/*/>*/}
                        {/*</CloseButtonContainer>*/}
                        <div className="menu-link">
                            <Link
                                href="/"
                                large
                                color='white'
                                onClick={() => setShowMenu(!showMenu)}
                            >
                                Home
                            </Link>
                            <Link
                                href="/products"
                                large
                                color='white'
                                onClick={() => setShowMenu(!showMenu)}
                            >
                                Products
                            </Link>
                            <Link
                                href="sale"
                                large
                                color='white'
                                onClick={() => setShowMenu(!showMenu)}
                            >
                                Sale
                            </Link>
                            <Link
                                href="/profile"
                                large
                                color='white'
                                onClick={() => setShowMenu(!showMenu)}
                            >
                                Profile
                            </Link>
                        </div>
                    </div>
                }
            </nav>
        </>
    );
}

export default Navbar