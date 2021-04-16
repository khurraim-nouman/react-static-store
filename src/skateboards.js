import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

const Image = styled.img`
    width: 100%;
    height: 300px;
    display: block;
    margin: 10px auto;
`;

const color = {
    'color': 'red'
};

const noBorder = {
    'border': 'none'
};



const SkateBoard = () => {

    const [products] = useState([
    {
        name: 'Boosted Stealth',
        cost: '$ 1200',
        image: 'https://cdn.shopify.com/s/files/1/0268/1454/6031/products/boosted-stealth-bottom_400x.png?v=1586292277',
    },

    {
        name: 'Boosted Mini X',
        cost: '$ 1400',
        image: 'https://cdn.shopify.com/s/files/1/0268/1454/6031/products/Mini-X-Belly_2000x.png?v=1586292711',
    },

    {
        name: 'Boosted Plus V3',
        cost: 'Sold Out',
        image: 'https://cdn.shopify.com/s/files/1/0268/1454/6031/products/boosted-plus-battery_2000x.png?v=1586292529',
    },

    {
        name: 'Boosted Mini S',
        cost: 'Sold Out',
        image: 'https://cdn.shopify.com/s/files/1/0268/1454/6031/products/boosted-mini-1-1_2000x.png?v=1587690465'
    },

    {
        name: 'Bosted V2 Plus',
        cost: '$ 1500',
        image: 'https://cdn.shopify.com/s/files/1/0268/1454/6031/products/boosted-2ndgen-board_2000x.jpg?v=1610481207'
    },

    {
        name: 'Boosted V2 Dual',
        cost: 'Sold Out',
        image: 'https://cdn.shopify.com/s/files/1/0268/1454/6031/products/boosted-2ndgen-board_2000x.jpg?v=1610481207'
    }


]);

    return(

        <div className='container'>
            <h2 className='mt-5 mb-4'>Electric SkateBoards</h2>
            <hr className='w-10 mb-4' />

            <p>All of our boards are 100% Boosted.</p>


            <div className='row'>

                {products.map( (product) => {
                    return (
                        <div className='col-lg-4 col-md-4 col-12'>
                                <div className='card mb-5' style={noBorder}>
                                    <div className='card-body'>
                                        <Image className='img-fluid' src={product.image} alt={product.name}/>
                                        <h5 className='text-center' style={color}>{product.name}</h5>
                                        <h6 className='text-center'>{product.cost}</h6>
                                    </div>
                                </div>
                        </div>
                    );
                })}
                

            </div>
        </div>
    );
}

export default SkateBoard;