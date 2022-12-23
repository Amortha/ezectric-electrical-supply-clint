import React from 'react';
import { FaRocket } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { SiYoutubemusic } from 'react-icons/si';
import { TbBrandInstagram } from 'react-icons/tb';
import footerlogo from "../../assets/footerlogo.png"
import { RiMailDownloadFill } from "react-icons/ri";
import { BiPhoneCall } from 'react-icons/bi';
import { GoLocation } from 'react-icons/go';

const Footer = () => {
    return (
        <div>
            <div className='bg-gray-100 '>
                <h1 className='text-center text-2xl text-blue-900 pt-12'>Subscribe Newsletter</h1>
                <h1 className='text-center text-4xl text-black font-bold py-4'>Get Updated News</h1>
                <p className='text-center'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.<br />
                    Aenean commodo ligula eget dolor. Aenean massa.</p>

                <div className='flex text-center justify-center mt-6'>
                    <input type="text" placeholder="Your Email" className="input input-bordered    w-full max-w-xl " />
                    <button type="Search" className=" bg-black hover:bg-blue-900 p-4 " ><FaRocket color='white' size="20px" /></button>
                </div>
            </div>
            <footer className="footer p-10 bg-blue-900 text-neutral-content mt-[-15px]">
                <div className='m-auto '>
                    <span className="footer-title"> Useful Links</span>
                    <a className="link link-hover"></a>
                    <a className="link link-hover">Terms and Conditions</a>
                    <a className="link link-hover">Disclaimer</a>
                    <a className="link link-hover">Support</a>
                    <a className="link link-hover">FAQ</a>
                </div>
                <div className='m-auto'>
                    <img className='w-96 py-4' src={footerlogo} alt="" />
                    <p className='text-center'>Lorem ipsum dolor sit amet, consectetuer<br /> adipiscing elit. Aenean commodo
                        ligula eget<br></br> dolor. Aenean massa. Cum sociis natoque penatibus.</p>
                    <div className='flex m-auto py-2'>
                        <div className='pr-4'>
                            <a target='_blank'href='https://web.facebook.com/amitshill.amitshil/'><BsFacebook px-2 size='30px' color='white' /></a>
                            
                        </div>
                        <div className='pr-4'>
                           <a target='_blank' href='//www.linkedin.com/in/amortha-kumar-shill-05a424241/'> <TiSocialLinkedinCircular size="40px" color='white' /></a>
                        </div>
                        <div className='pr-4'>
                           <a target='_blank' href=''> <SiYoutubemusic size="30px" color='white' /></a>
                        </div>
                        <div className='pr-4'>
                           <a target='_blank' href=''> <TbBrandInstagram size="35px" color='white' /></a>
                        </div>

                    </div>
                </div>
                <div className='m-auto '>
                    <span className="footer-title ">Quick Links</span>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Shop</a>
                    <a className="link link-hover">Product Details</a>
                    <a className="link link-hover">Contact</a>
                </div>

            </footer>
            <div className='grid sm:px-32 lg:grid-cols-3 sm:grid-cols-1 bg-blue-900 text-center pb-8 text-white text-xl '>
                <div className='flex pt-1 '>
                     <GoLocation size='30px' />
                    <h1 className='px-2'>Jl. Sunset Road No.99, Kuta</h1></div>
                <div className='flex pt-1'> 
                      <RiMailDownloadFill size='30px' />
                    <h1 className='px-2'> amitsharma1998k@gmail.com</h1></div>
                <div className='flex pt-1'>
                    <BiPhoneCall size='30px'  />
                    <h1 className='px-2'>  +8801829704087</h1></div>
            </div>

        </div>
    );
};

export default Footer;