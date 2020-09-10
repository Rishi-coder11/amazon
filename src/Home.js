import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />  
            <div className="home__row">
            <Product title='Crane Train Set- 60 Pcs Wooden Track & Exclusive Crane & Trains- Fits Thomas, Chuggington, Melissa- Gift Packed Toy Railway Kits- Kids Friendly Building Toy for 3+ Years Old Girls & Boys'
             price={36.99} rating={4} image='https://images-na.ssl-images-amazon.com/images/I/81LRH17FlfL._AC_SL1500_.jpg' />
            <Product title='CYBERPOWERPC Gamer Xtreme VR Gaming PC, Intel Core i5-9400F 2.9GHz, NVIDIA GeForce GTX 1660 6GB, 8GB DDR4, 240GB SSD, 1TB HDD, WiFi Ready & Win 10 Home (GXiVR8060A8, Black)'
             price={749.99} rating={4} image='https://m.media-amazon.com/images/I/71fVpfx5oiL._AC_UY218_.jpg'/>
            </div>
            <div className="home__row">
            <Product title='Gucci Ladies Dionysus Bamboo Top Handle Bag'
            price={50.00} rating={5} image='https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQfJoEUnm5od3iF-Ax0dS70nE8NHB7iRcrF26GY6dvImWQpfMb72GiIrF0SsrDoU-4Fahz_zzOtg1Sw&usqp=CAc' />
            <Product title='Roadmaster - 26 Inches Granite Peak Mens Mountain Bike Black and Blue'
            price={265.00} rating={4} image='https://images-na.ssl-images-amazon.com/images/I/61SUADlym1L._AC_SL1242_.jpg'/>
            <Product title='Zulay 23 Piece Nylon Kitchen Utensils Nylon & Stainless Steel Cooking Utensils Set - Best Kitchen Tools Of Flexible Non-Stick Kitchen Utensils For Cooking'
            price={22.99} rating={4} image='https://images-na.ssl-images-amazon.com/images/I/81YQLhLjMoL._AC_SL1500_.jpg'/>
            </div>
            <div className="home__row">
            <Product title='Samsung LC49RG90SSUXEN 49 inch Curved LED Gaming Monitor and Super Ultra Wide Dual WQHD 5120 x 1440'
            price={1094.98} rating={4} image='https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg'/>
            </div>
           </div>
        </div>
    );
}

export default Home;
