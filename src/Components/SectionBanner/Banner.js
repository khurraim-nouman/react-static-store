import React from 'react';
//import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'



const FancyImage = styled.div`
    width: 100%;
    height: auto;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    color: #333;
    border: none;
    overflow: hidden;
    background-image: url(${props => props.Background || 'https://cdn.vox-cdn.com/thumbor/HW-LF6BxSbljrJrxVFYCAUK4_7o=/0x0:4000x2250/1400x1050/filters:focal(1680x805:2320x1445):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/67369155/Skateboard_.0.jpg'});
    
`;

const Banner = (props) => {
    return (
        
       <FancyImage style={{backgroundImage : 'https://cdn.vox-cdn.com/thumbor/HW-LF6BxSbljrJrxVFYCAUK4_7o=/0x0:4000x2250/1400x1050/filters:focal(1680x805:2320x1445):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/67369155/Skateboard_.0.jpg'}}> 
                <div class="row justify-content-center align-self-center">
                    <h1>{props.Heading}</h1>
                    <h2>{props.TagLine}</h2>
                </div>
       </FancyImage>        
          
        
    );
}


Banner.defaultProps = {
    Heading: 'This is the heading',
    Tagline: 'This is the TagLine'
};


export default Banner;