import React from "react";
import Services from "./Components/Services/Services";
import styled from 'styled-components';

const P = styled.p`
    margin: 0;
    padding: 0;
`;

const spans = {
    'color': 'red'
};

const large = {
    'height': '25vh'
};


const button = {
    'textTransform': 'uppercase',
    'paddingRight': '30px',
    'paddingLeft': '30px',
    'paddingTop': '15px',
    'paddingBottom': '15px'
}

const bold = {
    'fontWeight': '700'
};

const Contact = () => {
    return (
        <React.Fragment>
            
            <div className='container'>
                <h2 className=' mt-5'>Contact Us</h2>
                <hr className='w-30'/>

                <p className='mt-5'>Please be sure to check out the <span style={spans}>FAQ</span> page which will help answer some basic questions. </p>
                <p>If you have additional questions please fill out the following form. 
                   If your question has to do with your order,<span style={bold}> please include your order number.</span></p>



                <form className='mb-5'>
                    <div className='form-group'>
                        <label>Name</label>
                        <input type='text' className='form-control' />
                    </div>

                    <div className='form-group'>
                        <label>Email</label>
                        <input type='email' className='form-control' />
                    </div>

                    <div className='form-group'>
                        <label>Your Message</label>
                        <input type='text' style={large} className='form-control'/>
                    </div>

                    <button type="submit" style={button} class="btn btn-dark">Sign in</button>
                </form>


            </div>


            <div className='container mb-5'>
                <P>Email us:</P>
                <P>info@boostedusa.com</P>
                <P>service@boostedusa.com</P>
                <P>Boosted USA</P>
                <P>1281 Andersen Drive Suite K</P>
                <P>San Rafael, CA 94901</P>
            </div>            
        </React.Fragment>
    );
}

export default Contact;