import React from 'react';

const MyComponent = () => {
    return (
        <div className="w-[90%] lg:w-[95%] md:w-[90%] xl:w-[80%] 2xl:w-[60%] mx-auto my-4">
            <div className="grid grid-cols-8">
                <div className="col-span-8">
                    <h1 className={'text-[25px] font-[700]'} >Popular Products</h1>
                </div>
            </div>
        </div>
    );
};

export default MyComponent;
