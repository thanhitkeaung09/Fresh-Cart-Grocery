import React from 'react';
import Nav from "./Nav";
import HeroSection from "./HeroSection/HeroSection";
import FeatureCategory from "./FeatureProducts/FeatureCategory";
import FreshandBun from "./FreshandBun/FreshandBun";
import PopularProduct from "./PopularProducts/PopularProduct";
import DailyBestSell from "./DailyBestSell/DailyBestSell";
import Category from "./Category/Category";
import FooterCategories from "./Footer/FooterCategories";
import Payment from "./Payment/Payment";

const MyComponent = () => {
    return (
        <div className={''}>
            <Nav />
            <HeroSection/>
            <FeatureCategory/>
            <FreshandBun/>
            <PopularProduct/>
            <DailyBestSell/>
            <Category/>
            <FooterCategories/>
            {/*<Payment/>*/}
        </div>
    );
};

export default MyComponent;
