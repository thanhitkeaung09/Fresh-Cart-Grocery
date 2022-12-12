import React from 'react';
import {AiOutlineEye, AiOutlineHeart} from "react-icons/ai";
import {BsArrowLeftRight,BsArrowRightShort, BsGrid, BsPlus, BsStarFill, BsStarHalf} from "react-icons/bs";
import Timer from "./Timer";
// import {BsPlus} from "react-icons/bs";

function DailyBestSellProduct(props) {
    return (
        <div>
            <div className="" >
                <div className="grid grid-cols-8">

                    <div className=" col-span-10 md:col-span-4 lg:col-span-2">
                        <div className="border coffee-bg hover:border-[#0aad0a] h-[100%] p-[15px] rounded-lg  m-2">
                            <div className=" rounded-lg py-4 pl-2 ">
                                <h1 className={'text-white font-extrabold text-[24.5px] font-[700]'} >100% Organic Coffee Beans.</h1>
                                <p className={'text-white '} >Get the best deal before close.</p>
                                <button type="button"
                                        className="hover:bg-[#099309]  text-white bg-[#0aad0a]  rounded text-sm px-5 py-2.5 text-center flex items-center space-x-1  "> <span className={'font-[14px]'} >Shop Now</span><BsArrowRightShort size={20}/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className=" col-span-10 md:col-span-4 lg:col-span-2">
                        <div className="border hover:border-[#0aad0a] h-[100%] p-[15px] rounded-lg  m-2">

                            <div className="relative flex items-center justify-center group">
                                <img src={require("../../assets/images/product-img-11.jpg")} alt=""/>
                                <div className="flex items-center absolute space-x-3 hidden group-hover:flex">
                                    <div className={'bg-white hover:bg-[#0aad0a] hover:text-white rounded-lg w-9 h-9 shadow-beautiful flex items-center justify-center'}>
                                        <AiOutlineEye size={17}/>
                                    </div>
                                    <div className={'bg-white hover:bg-[#0aad0a] hover:text-white rounded-lg w-9 h-9 shadow-beautiful flex items-center justify-center'}>
                                        <AiOutlineHeart size={17}/>
                                    </div>
                                    <div className={'bg-white hover:bg-[#0aad0a] hover:text-white rounded-lg w-9 h-9 shadow-beautiful flex items-center justify-center'}>
                                        <BsArrowLeftRight size={17}/>
                                    </div>
                                </div>
                            </div>


                            <div className="space-y-3">
                                <p className={'text-[13px] font-bold text-gray-400'}>Tea, Coffee & Drinks</p>
                                <h1 className={'text-gray-700'}>Roast Ground Coffee</h1>
                                <div className="flex justify-between items-center space-x-3">
                                    <div className="flex space-x-2">
                                        <p className={'line-through text-gray-400'}>13$ </p><span>18$</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <BsStarFill className={'text-yellow-500'} size={13}/>
                                        <BsStarFill className={'text-yellow-500'} size={13}/>
                                        <BsStarFill className={'text-yellow-500'} size={13}/>
                                        <BsStarFill className={'text-yellow-500'} size={13}/>
                                        <BsStarHalf className={'text-yellow-500'} size={13}/>
                                        <div className="">
                                            <p className={'text-[13px] text-gray-400'}>4.5</p>
                                        </div>
                                    </div>

                                </div>

                                <button type="button"
                                        className="hover:bg-[#099309]  text-white bg-[#0aad0a]  rounded text-sm px-8 py-2.5 text-center flex items-center space-x-2 w-full  "><BsPlus size={20}/> <span className={'font-[14px]'} >Add to Cart</span>
                                </button>
                                <Timer/>


                            </div>
                        </div>
                    </div>
                    <div className=" col-span-10 md:col-span-4 lg:col-span-2">
                        <div className="border hover:border-[#0aad0a] h-[100%] p-[15px] rounded-lg  m-2">

                            <div className="relative flex items-center justify-center group">
                                <img src={require("../../assets/images/product-img-12.jpg")} alt=""/>
                                <div className="flex items-center absolute space-x-3 hidden group-hover:flex">
                                    <div className={'bg-white hover:bg-[#0aad0a] hover:text-white rounded-lg w-9 h-9 shadow-beautiful flex items-center justify-center'}>
                                        <AiOutlineEye size={17}/>
                                    </div>
                                    <div className={'bg-white hover:bg-[#0aad0a] hover:text-white rounded-lg w-9 h-9 shadow-beautiful flex items-center justify-center'}>
                                        <AiOutlineHeart size={17}/>
                                    </div>
                                    <div className={'bg-white hover:bg-[#0aad0a] hover:text-white rounded-lg w-9 h-9 shadow-beautiful flex items-center justify-center'}>
                                        <BsArrowLeftRight size={17}/>
                                    </div>
                                </div>
                            </div>


                            <div className="space-y-3">
                                <p className={'text-[13px] font-bold text-gray-400'}>Fruits & Vegetables</p>
                                <h1 className={'text-gray-700'}>Crushed Tomatoes</h1>
                                <div className="flex justify-between items-center space-x-3">
                                    <div className="flex space-x-2">
                                        <p className={'line-through text-gray-400'}>13$ </p><span>18$</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <BsStarFill className={'text-yellow-500'} size={13}/>
                                        <BsStarFill className={'text-yellow-500'} size={13}/>
                                        <BsStarFill className={'text-yellow-500'} size={13}/>
                                        <BsStarFill className={'text-yellow-500'} size={13}/>
                                        <BsStarHalf className={'text-yellow-500'} size={13}/>
                                        <div className="">
                                            <p className={'text-[13px] text-gray-400'}>4.5</p>
                                        </div>
                                    </div>

                                </div>

                                <button type="button"
                                        className="hover:bg-[#099309]  text-white bg-[#0aad0a]  rounded text-sm px-8 py-2.5 text-center flex items-center space-x-2 w-full  "><BsPlus size={20}/> <span className={'font-[14px]'} >Add to Cart</span>
                                </button>
                                <Timer/>


                            </div>
                        </div>
                    </div>
                    <div className=" col-span-10 md:col-span-4 lg:col-span-2">
                        <div className="border hover:border-[#0aad0a] h-[100%] p-[15px] rounded-lg  m-2">

                            <div className="relative flex items-center justify-center group">
                                <img src={require("../../assets/images/product-img-13.jpg")} alt=""/>
                                <div className="flex items-center absolute space-x-3 hidden group-hover:flex">
                                    <div className={'bg-white hover:bg-[#0aad0a] hover:text-white rounded-lg w-9 h-9 shadow-beautiful flex items-center justify-center'}>
                                        <AiOutlineEye size={17}/>
                                    </div>
                                    <div className={'bg-white hover:bg-[#0aad0a] hover:text-white rounded-lg w-9 h-9 shadow-beautiful flex items-center justify-center'}>
                                        <AiOutlineHeart size={17}/>
                                    </div>
                                    <div className={'bg-white hover:bg-[#0aad0a] hover:text-white rounded-lg w-9 h-9 shadow-beautiful flex items-center justify-center'}>
                                        <BsArrowLeftRight size={17}/>
                                    </div>
                                </div>
                            </div>


                            <div className="space-y-3">
                                <p className={'text-[13px] font-bold text-gray-400'}>Fruits & Vegetables</p>
                                <h1 className={'text-gray-700'}>Golden Pineapple</h1>
                                <div className="flex justify-between items-center space-x-3">
                                    <div className="flex space-x-2">
                                        <p className={'line-through text-gray-400'}>13$ </p><span>18$</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <BsStarFill className={'text-yellow-500'} size={13}/>
                                        <BsStarFill className={'text-yellow-500'} size={13}/>
                                        <BsStarFill className={'text-yellow-500'} size={13}/>
                                        <BsStarFill className={'text-yellow-500'} size={13}/>
                                        <BsStarHalf className={'text-yellow-500'} size={13}/>
                                        <div className="">
                                            <p className={'text-[13px] text-gray-400'}>4.5</p>
                                        </div>
                                    </div>

                                </div>

                                <button type="button"
                                        className="hover:bg-[#099309]  text-white bg-[#0aad0a]  rounded text-sm px-8 py-2.5 text-center flex items-center space-x-2 w-full  "><BsPlus size={20}/> <span className={'font-[14px]'} >Add to Cart</span>
                                </button>
                                <div className="">
                                    <Timer/>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DailyBestSellProduct;