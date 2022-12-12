import React from 'react';
import {BsArrowRight} from "react-icons/bs";

const MyComponent = () => {
    return (
        <div className={'w-full bg-[#f0f3f2] fresh-bg rounded-lg'}>
            <div className="p-[28px]">
                <h1 className={'text-[25px] font-[700]'}>Fruits and Vegetables</h1>
                <p className={'font-light mt-2 mb-4'}>Get up 30% off</p>
                <button type="button"
                        className=" text-white bg-[#001e2b] hover:bg-[#26404b] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2">
                    Shop now
                    <BsArrowRight className={"ml-2"} />
                </button>
            </div>
        </div>
    );
};

export default MyComponent;
