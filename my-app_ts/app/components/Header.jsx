// 'use client';
// import {useState} from  'react';
import Link from "next/link"
import Navbar from "@/app/components/Navbar/page";

const Header = () => {
    return (
        <header className="header">
            <Navbar/>

            {/*<div className="container">*/}
            {/*    <Link href="/">Сплит Центр</Link>*/}
            {/*</div>*/}
            {/*<div className="links">*/}
            {/*    <Link href='/'>Домой</Link>*/}
            {/*    <Link href='/about'>Акции и услуги</Link>*/}
            {/*    <Link href='/code/repos'>Отзывы</Link>*/}
            {/*</div>*/}
        </header>
    )
}
export default Header