import React from 'react';
import AmazonPay from "../../assets/images/amazon-pay.png"
import AmericanExpress from "../../assets/images/American-express.png"
import MasterCard from "../../assets/images/master-card.png"
import Paypal from "../../assets/images/paypal.png"
import Visa from "../../assets/images/visa.png"
import AppStore from "../../assets/images/app store thumbnail.svg"
import PlayStore from "../../assets/images/playstore.svg"

function Payment(props) {
    return (
        <>
            <div className={' col-span-12 md:col-span-12 lg:col-span-6'}>
                <div className="flex items-center space-x-1 md:space-x-5 my-8">
                    <h1 className={'text-sm'}>Payment Partners</h1>
                    <div className="flex items-center space-x-1 md:space-x-5">
                        <img src={AmazonPay} className={'w-11'} alt=""/>
                        <img src={AmericanExpress} className={'w-11'} alt=""/>
                        <img src={MasterCard} className={'w-11'} alt=""/>
                        <img src={Paypal} className={'w-11'} alt=""/>
                        <img src={Visa} className={'w-11'} alt=""/>
                    </div>
                </div>
            </div>
            <div className={' col-span-12 lg:col-span-6'}>
                <div className="flex items-center space-x-5 my-5 ">
                    <h1 className={'text-sm'}>Get deliveries with FreshCart</h1>
                    <div className="space-x-1  lg:space-x-5  block md:flex">
                            <button >
                                <img className={'w-[150px]'} src={AppStore} alt=""/>
                            </button>
                            <button>
                                <img className={'w-[150px]'} src={PlayStore} alt=""/>
                            </button>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Payment;