import React from 'react';
import DailyBestSellProduct from "./DailyBestSellProduct";
import DailyBestSellTitle from "./DailyBestSellTitle";

function DailyBestSell() {
    return (
        <div className={' w-[90%] lg:w-[95%] md:w-[90%] xl:w-[80%] 2xl:w-[60%] mx-auto my-10 z-50 mb-[20px]'}>
            <DailyBestSellTitle/>
            <DailyBestSellProduct/>
        </div>
    );
}

export default DailyBestSell;