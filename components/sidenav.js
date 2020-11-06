import React, { useState } from "react";

import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

// Components

const links = [
    {
        title: "Acasă",
        path: "/",
    },
    {
        title: "Despre GOBV",
        path: "/about",
    },
    {
        title: "De ce GOBV",
        path: "/service",
    },
    {
        title: "Parteneri",
        path: "/portfolio",
    },
    {
        title: "Articole",
        path: "/blog",
    },
    {
        title: "Contact",
        path: "/contact",
    },
];

function Header({ posts }) {
    const router = useRouter()
  
    const [displaySidenav, setDisplaySidenav] = useState(false);

    const handleClick = (e) => {
       
        e.preventDefault();
        setDisplaySidenav(!displaySidenav);
    };

    return (
        <>
            <header className="app-header app-header-1">
                <div className="header-logo">
                    <Link href='/'>GO BRAȘOV</Link>
                </div>
                <button className="button button-menu" onClick={(e) => handleClick(e)}>
                    <span></span>
                </button>
                <ul className="header-nav">
                    {links.map((item, index) => (
                        <li key={index}>
                        <Link href={item.path} >
                             
                               
                                <a className={router.pathname === item.path ? "active" : ""}><span className="anchor">{item.title}</span></a>
                           </Link>
                        </li>
                    ))}
                </ul>
            </header>
            <div className={`app-sidenav ${displaySidenav && "active"}`}>
                <div className="sidenav-menu">
                    <div className="logo">
                        <Link href=''>GO BRAȘOV</Link>
                    </div>
                    <button className="button" onClick={(e) => handleClick(e)}></button>
                    <ul className="sidenav-nav">
                        {links.map((item, index) => (
                            <li key={index} onClick={(e) => handleClick(e)}>
                           <Link href={item.path} > 
                              
                           <a className={router.pathname === item.path ? "active" : ""}><span className="anchor">{item.title}</span></a>
                           </Link> 
                            </li>
                        ))}
                    </ul>
                    <div className="sidenav-links">
                        <ul>
                            <li>
                                <a href="!#">
                                    <FaTwitter className="icon" />
                                </a>
                            </li>
                            <li>
                                <a href="!#">
                                    <FaFacebook className="icon" />
                                </a>
                            </li>
                            <li>
                                <a href="!#">
                                    <FaInstagram className="icon" />
                                </a>
                            </li>
                        </ul>
                        <p>Follow Me</p>
                    </div>
                </div>
                <span className="sidenav-close" />
            </div>
       
        </>
    );
}

export default Header;
