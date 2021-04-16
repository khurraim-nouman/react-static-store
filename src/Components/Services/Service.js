import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const CardStyling = {
    'color': '#fff',
    'textAlign': 'center',
    'border': 'none',
    'background': 'none'
};

const imgStyling = {
    'display': 'block',
    'marginLeft': 'auto',
    'marginRight': 'auto',
    'height': '100px',
    'width': '100px'
}

const Service = (props) => {
    return (
        <div className='card' style={CardStyling}>
           <div className='card-body'>
               <img 
               src={props.Link}
               style={imgStyling}
               alt = {props.Heading}
               />
               <h1 className='mb-4'>{props.Heading}</h1> 
               <p>{props.Text}</p>
           </div>
        </div>
    );
}

Service.defaultProps = {
    Link: 'https://cdn.shopify.com/s/files/1/0268/1454/6031/files/reliable-electric-boosted-boards-and-rev-scooter.png?v=1586793579',
    Text: 'Boosted is known for its premium performance boards offering a next-level experience.',
    Heading: 'Go Far'
};

export default Service;