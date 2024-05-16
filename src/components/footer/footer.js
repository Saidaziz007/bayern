import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.svg";
import Link from "next/link";
import { FaInstagram, FaYoutube, FaFacebookF, FaTwitter } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-all">
          <div className="footer-img">
            <Image src={logo} alt="logo" />
          </div>
          <div className="footer-list">
            <Link href={"/"}>HOME</Link>
            <Link href={"/about"}>ABOUT THE CLUB</Link>
            <Link href={"/faq"}>FAQ</Link>
            <Link href={"/news"}>NEWS</Link>
            <Link href={"/rules"}>RULES</Link>
            <Link href={"/contact"}>CONTACTS</Link>
          </div>
          <div className="footer-icons">
            <FaInstagram />
            <FaYoutube />
            <FaFacebookF />
            <FaTwitter />
          </div>
          <p>Copyright © 2024 Bayern Token. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
