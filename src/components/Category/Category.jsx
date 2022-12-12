import React from 'react';
import {BsClock} from 'react-icons/bs'
import {BsGift} from "react-icons/bs"
import {AiOutlineGift} from "react-icons/ai"
import clock from "../../assets/images/clock.svg"
import gift from "../../assets/images/gift.svg"
import cube from "../../assets/images/package.svg"
import refresh from "../../assets/images/refresh-cw.svg"
function Category(props) {
    return (
        <div className={'w-[90%] lg:w-[95%] md:w-[90%] xl:w-[80%] 2xl:w-[60%] mx-auto my-10 z-50'}>
            <div className="grid grid-cols-12 my-[100px] space-x-2">
                <div className="col-span-6 md:col-span-3">
                    <div className="space-y-3 w-[90%]">
                        <img src={clock} alt=""/>
                        <h1 className={'font-extrabold text-lg'} >10 minute grocery now</h1>
                        <p className={'text-[#5c6c75] text-sm'}>Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you.</p>
                    </div>
                </div>

                <div className="col-span-6 md:col-span-3">
                    <div className="space-y-3 w-[95%]">
                        <img src={gift} alt=""/>
                        <h1 className={'font-extrabold text-lg'} >Best Prices & Offers</h1>
                        <p className={'text-[#5c6c75] text-sm'}>Cheaper prices than your local supermarket, great cashback offers to top it off. Get best pricess & offers.</p>
                    </div>
                </div>

                <div className="col-span-6 md:col-span-3">
                    <div className="space-y-3 w-[90%]">
                        <img src={cube} alt=""/>
                        <h1 className={'font-extrabold text-lg'} >Wide Assortment</h1>
                        <p className={'text-[#5c6c75] text-sm'}>Choose from 5000+ products across food, personal care, household, bakery, veg and non-veg & other categories.</p>
                    </div>
                </div>

                <div className="col-span-6 md:col-span-3">
                    <div className="space-y-3 w-[90%]">
                        <img src={refresh} alt=""/>
                        <h1 className={'font-extrabold text-lg'} >Easy Returns</h1>
                        <p className={'text-[#5c6c75] text-sm'}>Not satisfied with a product? Return it at the doorstep & get a refund within hours. No questions asked <span className={'text-[#0aad0a]'}>policy.</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Category;