import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const ButtonStyles = {
    'backgroundColor': 'orange',
    'border': 'none',
    'color': '#fff',
    'borderRadius': '30px',
    'padding': '10px',
    'width': '30%'
};

const ShopSec = () => {
    return (
      <div className='container'>
        <div className='row pt-5 mb-5'>

            <div className='col-lg-4 col-md-4 col-12'>
                <img
                className='img-fluid w-100 mb-5' 
                src='https://cdn.shopify.com/s/files/1/0268/1454/6031/files/boosted-rev-scooter-purchase-online-in-stock_400x.jpg?v=1586794757'
                />
            </div>

            <div className='col-lg-4 col-md-4 col-12'>
                <img
                className='img-fluid w-100 mb-5' 
                src='https://cdn.shopify.com/s/files/1/0268/1454/6031/files/boosted-rev-display-and-features-in-stock-electric-scooter_400x.jpg?v=1586794682'
                />
            </div>

            <div className='col-lg-4 col-md-4 col-12'>
               
                <h2 className='pt-5'>Boosted Revolution</h2>
                <p>There's never been an electric scooter quite like this. Speed past traffic at 24 mph. Go up to 22 miles on a single charge. You'll get there in no time at all. Stop and go with the roll of your thumb.
                Its intuitive design means there’s almost no learning curve.</p>
                <button style={ButtonStyles}>Shop Now</button>
              
            </div>

        </div>
      </div>   
    );
}

export default ShopSec;