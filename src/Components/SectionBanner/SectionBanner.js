import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Banner from "./Banner";


const SectionBanner = () => {
    return (
        <div className='container'>
            <h1 className='text-center pt-5 px-5'>Looking for Boosted Boards, or Boosted Revs?</h1>
            <p className='text-center mb-5 px-5'>Boosted USA acquired all of the remaining inventory directly from Boosted.  This means we have the electric skateboards and scooter you all love and have been looking for.  Get your hands on these highly sought after products while supplies last.</p>
            

            <div className='row'>
                <div className='col-lg-6 col-md-6 col-12'>


                    <Banner 
                     Background='https://cdn.vox-cdn.com/thumbor/HW-LF6BxSbljrJrxVFYCAUK4_7o=/0x0:4000x2250/1400x1050/filters:focal(1680x805:2320x1445):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/67369155/Skateboard_.0.jpg'
                    />



                </div>

                <div className='col-lg-6 col-md-6 col-12'>
                    <Banner />
                </div>
            </div>
        </div>
    );
}

export default SectionBanner;