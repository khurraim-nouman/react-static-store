import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Service from './Service';

const rowStyle = {
    'backgroundColor': 'black'
};

const Services = () => {
    return (

        <div className='container-fluid' style={rowStyle}>
            <div className='row pt-3'>

                <div className='col-lg-3 col-md-3 col-12'>
                    <Service
                        Link='https://cdn.shopify.com/s/files/1/0268/1454/6031/files/fast-top-speed-electric-skateboards-and-scooter-boosted.png?v=1586793579'
                        Heading='Go Fast'
                        Text='Boosted is known for its premium performance boards offering a next-level experience.'
                    />
                </div>

                <div className='col-lg-3 col-md-3 col-12'>
                    <Service 
                        Link='https://cdn.shopify.com/s/files/1/0268/1454/6031/files/amazing-range-in-stock-electric-skateboard-and-scooter.png?v=1586793579'
                        Heading='Go Far'
                        Text='Boosted is known for its premium performance boards offering a next-level experience.'
                    />
                </div>

                <div className='col-lg-3 col-md-3 col-12'>
                    <Service 
                        Link='https://cdn.shopify.com/s/files/1/0268/1454/6031/files/boosted-boards-scooters-safety-is-priority.png?v=1586793066'
                        Heading='Go Safe'
                        Text='Boosted is known for its premium performance boards offering a next-level experience.'/>
                </div>

                <div className='col-lg-3 col-md-3 col-12'>
                    <Service 
                        
                        Heading='Build To Last!'
                        Text='Boosted is known for its premium performance boards offering a next-level experience.'/>
                </div>
                
            </div>
        </div>

    );
}

export default Services;