import React from 'react';
import banar from '../../assets/banar/banar.png'
import lamp from '../../assets/banar/lamp.png'
import whitepic from '../../assets/banar/white.png'


const Banar = () => {
    return (
        <section className='w-auto bg-fixed  ' style={{
            background: `url(${banar})`
        }}>


            <div className=' grid lg:grid-cols-2 sm:grid-cols-1   lg:pl-8 justify-items-center w-full h-auto '>

                <div className="w-auto h-3/5 text-white lg:py-24  " data-aos="fade-right"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="2000">
                    <div className="card-body ">
                        <h2 className="card-title text-5xl font-bold">
                            The Most Complete Electrical Shop</h2>
                        <p className=' py-6 text-2xl'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus.</p>
                        <div className="card-actions justify-start">
                            <button className="px-4 py-4 bg-blue-900 font-bold hover:bg-white hover:text-blue-900">SHOP NOW</button>
                            <button className=" px-4 py-4 hover:text-amber-500 font-bold flex ">VIEW PRODUCT  </button>


                        </div>
                    </div>
                </div>
                <div className="h-full w-11/12   bg-zinc-800 shadow-xl ml-58 ">
               
                    <div className='ml-12'>
                        <div >
                            <img className='w-80  h-96' src={whitepic} alt="pic" />
                         
                        </div>
                       
                        <div className=" " data-aos="fade-left"
                            data-aos-anchor="#example-anchor"
                            data-aos-offset="500"
                            data-aos-duration="500">
                            <button className=" px-6 py-4  bg-white font-black font-semibold">BEST PRICE <br></br><span className='text-2xl text-cyan-600'> $ 30.00</span></button>
                        </div>
                        <div className=" mt-[-320px]" data-aos="fade-up"
     data-aos-duration="3000">
                                 <div className='ml-44'>
                                 <p className='text-black text-blue-900 text-2xl font-semibold '>Office Lamp</p>
                                 </div>
                            <img className='w-72  h-92' src={lamp} alt="pic" />

                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default Banar;