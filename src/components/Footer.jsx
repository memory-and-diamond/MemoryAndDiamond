import styles from "../style";
import { footerLinks } from "../constants";

const Footer = () => (
  <section className={`bg-gradient-to-br from-blue-950 via-blue-800 to-blue-400 flex justify-center items-center sm:pt-12 py-6 sm:px-12 px-6 text-white flex-col`}>
    <div className={`flex justify-center items-start md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <h1 style={{ fontFamily: 'Dancing Script, cursive' }} className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-8">
          Memory & diamond
        </h1>
        <p className={`font-poppins text-lg mt-4 max-w-[312px]`}>
          A new way to make events more efficient and smarter through modern technology.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={index}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full pt-6 border-t border-t-[#fff]">
      <p className="font-poppins text-[16px] leading-[27px] text-white tracking-wide">
        Copyright Ⓒ 2023 <b>Memory & Diamond</b>. All rights reserved.</p>
    </div>
  </section>
);

export default Footer;
