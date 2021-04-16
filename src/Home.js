import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Clients from "./Components/Clients/Clients";
import ShopSec from "./Components/ShopSec/ShopSec";
import SBoard from "./Components/SBoard/SBoard"
import ShowCase from './Components/ShowCase/ShowCase';

const Home = () => {
    return(
        <React.Fragment>
            <ShowCase />
            <Clients />
            <SBoard />
            <ShopSec />
        </React.Fragment>
    );
}

export default Home;