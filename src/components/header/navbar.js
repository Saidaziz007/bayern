import React from "react";
import "./navbar.css";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <nav className="container">
        <div className="nav-all">
          <div className="nav-logo">
            <Image
              src={logo}
              alt="logo"
              priority={true}
              width={80}
              height={90}
            />
          </div>
          <div className="nav-info">
            <Link href={"/"}>HOME</Link>
            <Link href={"/about"}>ABOUT THE CLUB</Link>
            <Link href={"/faq"}>FAQ</Link>
            <Link href={"/news"}>NEWS</Link>
            <Link href={"/rules"}>RULES</Link>
            <Link href={"/contact"}>CONTACTS</Link>
            <button className="nav-btn-1">LOGIN</button>
            <button className="nav-btn-2">SIGN UP</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
