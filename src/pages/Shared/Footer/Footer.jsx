import React from "react";
import { Link } from "react-router-dom";
import { FaPaperPlane, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-black text-white">
      <div>
        <span className="footer-title opacity-100">Subscribe</span>
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text text-white">
              Register and get notified about all the news & updates before it
              gets too late.
            </span>
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered w-full pr-16"
            />
            <button className="btn btn-secondary absolute top-0 right-0 rounded-l-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div>
        <span className="footer-title opacity-100">Explore</span>
        <a className="link link-hover">Browse Recipes</a>
        <a className="link link-hover">Submit a Recipe</a>
        <a className="link link-hover">Our Chefs</a>
        <a className="link link-hover">Latest News</a>
        <Link>Contact</Link>
      </div>
      <div>
        <span className="footer-title opacity-100">Contact</span>
        <Link className="link link-hover flex gap-x-2 items-center">
          <FaMapMarkerAlt></FaMapMarkerAlt>787 Mark View Street, New Town,
          California
        </Link>
        <Link className="link link-hover flex gap-x-2 items-center">
          <FaPaperPlane></FaPaperPlane> needhelp@thatix.com
        </Link>
        <Link className="link link-hover flex gap-x-2 items-center">
          <FaPhoneAlt></FaPhoneAlt>666 888 0000
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
