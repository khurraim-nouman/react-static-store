import React from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

//https://cdn.shopify.com/s/files/1/0268/1454/6031/files/buy-boosted-boards-electric-skateboard-in-stock-1_1400x.jpg?v=1586786055


const Section = styled.section`
    background-image: url("
    https://cdn.shopify.com/s/files/1/0268/1454/6031/files/buy-boosted-boards-electric-skateboard-in-stock-1_1400x.jpg?v=1586786055
    ") ;
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`;

const Button = styled.button`
    background: red;
    border: none;
    color: #fff;
    border-radius: 30px;
    padding: 7px 5px;
    width: 15%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5px;
    margin-bottom: 50px;

    @media (max-width: 600px) {
        width: 30%;
    }
`;

const H2 = styled.h2`
    text-align: center;
    font-weight: bold;
    margin-botton: 15px;
    font-size: 40px;
`;

const Para = styled.p`
    text-align: center;
    padding: 5px 50px;
    font-weight: 600;
`;

const ParaSmall = styled.p`
    padding-top: 60px;
    text-align: center;
    font-weight: 600;
`;

const SBoard = (props) => {
    return(

        <Section>
            <ParaSmall>High Performance</ParaSmall>
            <H2>Electric Skateboards</H2>
            <Para>Cruising campus, going to work or getting through that long list of errands
                  has never been easier or more fun.</Para>
            <Button>Shop Now</Button>
        </Section>
       
    );
    
}



export default SBoard;