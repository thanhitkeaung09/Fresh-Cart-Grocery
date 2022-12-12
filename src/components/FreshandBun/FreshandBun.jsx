import React from 'react';
import Fresh from "./Fresh";
import Bun from "./Bun";

const MyComponent = () => {
    return (
        <div className="w-[90%] lg:w-[95%] md:w-[90%] xl:w-[80%] 2xl:w-[60%] mx-auto my-4">
            <div className="grid grid-cols-8 space-y-4 md:space-y-0 md:space-x-4 my-20">
                <div className="col-span-8 md:col-span-4">
                    <Fresh/>
                </div>
                <div className="col-span-8 md:col-span-4">
                    <Bun/>
                </div>
            </div>
        </div>
    );
};

export default MyComponent;
