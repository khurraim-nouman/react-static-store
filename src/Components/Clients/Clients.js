import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const styles = {
    'backgroundColor': 'black'
};

const imgStyle = {
     'height': '35px',
     'width': '175px',
     'display': 'block',
     'marginLeft': 'auto',
     'marginRight': 'auto',
     'marginBottom': '20px',
     'marginTop': '20px'
};

const Clients = () => {
    return (

      <div className='container-fluid'>
        <div className='row p-3' style={styles}>

            <div className='col-lg-3 col-md-3 col-12'>
                    <img
                    src='https://cdn.shopify.com/s/files/1/0268/1454/6031/files/buy-boosted-rev-electric-scooter-press-electrek-logo-white_200x.png?v=1586609447' 
                    style={imgStyle}
                    />
            </div>
            
            <div className='col-lg-3 col-md-3 col-12'>
                    <img
                    src='https://cdn.shopify.com/s/files/1/0268/1454/6031/files/purchase-boosted-elecric-scooter-TechCrunch-Black-and-White-Logo_400x.png?v=1586609461' 
                    style={imgStyle}
                    />
            </div>

            <div className='col-lg-3 col-md-3 col-12'>
                    <img
                    src='https://cdn.shopify.com/s/files/1/0268/1454/6031/files/purchase-boosted-electric-skateboards-press-Popular_Mechanics_logo-white_200x.png?v=1586609473' 
                    style={imgStyle}
                    />
            </div>            

            <div className='col-lg-3 col-md-3 col-12'>
                    <img
                    src='https://cdn.shopify.com/s/files/1/0268/1454/6031/files/buy-boosted-boards-press-wired_logo_white_200x.png?v=1586609486' 
                    style={imgStyle}
                    />
            </div>

        </div>

      </div>   
    );
}

export default Clients;