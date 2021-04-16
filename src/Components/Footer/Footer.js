import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

const FooterWhite = styled.div`
    background: #f4f4f4;
    color: #333;
    width: 100%;
`;


const Image = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
`;

const Li = styled.li`
    list-style: none;
    margin: 0;
    padding: 0;
    cursor: pointer;

    &:hover {
        color: red;
    }
`;

const H4 = styled.h4`
    font-weight: 700;
`;

const Ul = styled.ul`
    padding: none !important;
    list-style-type: none;
`;

const P = styled.p`
    padding: 0;
    margin: 5px 0;

    &:hover {
        color: red;
    }
`;


const Footer = () => {
    return (
        <FooterWhite className='container-fluid'>
            <div className='row pt-5 pb-5'>
                <div className='col-lg-4 col-md-4 col-12'>
                    <Image src='https://cdn.shopify.com/s/files/1/0268/1454/6031/files/buy-boosted-boards-online-electric-skateboard-2_200x.png?v=1586793118' />
                </div>

                <div className='col-lg-4 col-md-4 col-12'>
                    <H4>Explore</H4>
                            <P>Electric Skateboards</P>
                            <P>Electric Scooters</P>
                            <P>Accessories</P>
                            <P>FAQs</P>
                            <P>Gift Card</P>
                            <P>Contact</P>
                </div>

                <div className='col-lg-4 col-md-4 col-12'>
                    <H4>About Boosted USA</H4>
                    <p className='mb-3'>Boosted empowers people everywhere to commute across their cities, campuses, and communities in ways that were never before possible.
                       Boosted is solving one of the biggest problems people face each day: transportation.</p>
                        <P>CaliRides LLC - DBA Boosted USA</P>    
                        <P>1281 Andersen Drive Ste. K</P>
                        <P>San Rafael, CA 94901</P>
                    
                </div>

            </div>
        </FooterWhite>
    );
}

export default Footer;