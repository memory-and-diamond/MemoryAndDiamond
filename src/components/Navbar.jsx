import { useState } from "react";
import { Link } from 'react-router-dom';
import { close, menu } from "../assets";
import { navLinks } from "../constants";
import styles from "../style";

const Navbar = () => {
    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);

    return (
        <nav className={`w-full flex py-4 justify-between items-center bg-primary/20 z-50 fixed backdrop-blur-md navbar ${styles.paddingX}`}>
            <h1 className="text-white text-xl" style={{ fontFamily: 'Dancing Script, cursive' }}>Memory & diamond</h1>
            <ul className="list-none sm:flex hidden justify-end gap-5 items-center flex-1 ">
                {navLinks.map((nav, index) => (
                    <li
                        key={index}
                        className={`font-poppins font-normal cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"
                            } `}
                        onClick={() => setActive(nav.title)}
                    >
                        {nav.title == 'Book Now' ?
                            <button className="w-28 h-10 text-white rounded bg-blue-gradient-btn font-semibold">{nav.title}</button> :
                            <Link to={nav.link}>{nav.title}</Link>
                        }
                    </li>
                ))}
            </ul>

            <div className="sm:hidden flex flex-1 justify-end items-center">
                <img
                    src={toggle ? close : menu}
                    alt="menu"
                    className="w-[28px] h-[28px] object-contain"
                    onClick={() => setToggle(!toggle)}
                />

                {/* mobile */}

                <div
                    className={`${!toggle ? "hidden" : "flex"
                        } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
                >
                    <ul className="list-none flex justify-end items-start flex-1 flex-col">
                        {navLinks.map((nav, index) => (
                            <li
                                key={nav.id}
                                className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"
                                    } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                                onClick={() => setActive(nav.title)}
                            >
                                {nav.title == 'Contact' ?
                                    <button className="w-24 h-9 rounded ml-5 bg-blue-gradient-btn font-semibold">{nav.title}</button> :
                                    <Link to={nav.link}>{nav.title}</Link>
                                }
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;


