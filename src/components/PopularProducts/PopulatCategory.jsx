import React from 'react';
import {BsGrid, BsStarFill} from "react-icons/bs"
import {BsStarHalf} from 'react-icons/bs'
import {BsPlus} from "react-icons/bs"
import {AiOutlineEye} from "react-icons/ai"
import {AiOutlineHeart} from "react-icons/ai"
import {BsArrowLeftRight} from "react-icons/bs"
import Tooltips from "./Tooltips";
const MyComponent = () => {
    return (
        <div className="w-[90%] lg:w-[95%] md:w-[90%] xl:w-[80%] 2xl:w-[60%] mx-auto my-4" >
            <div className="grid grid-cols-10 space-y-4">

                <div className=" col-span-10 md:col-span-5 lg:col-span-2">
                    <div className="border hover:border-[#0aad0a] h-[100%] p-[15px] rounded-lg m-2">
                        <span className={'bg-red-500 text-white  text-[13px] px-2.5 py-1  rounded-full'} >Sale</span>
                        <div className="relative flex items-center justify-center group">
                            <img src={require("../../assets/images/product-img-1.jpg")} alt=""/>
                            <div className="flex items-center absolute space-x-3 hidden group-hover:flex">
                                <div data-tooltip-target="tooltip-default"  className={'bg-white hover:bg-[#0aad0a] hover:text-white rounded-lg w-9 h-9 shadow-beautiful flex items-center justify-center'}>

                                    <AiOutlineEye size={17}/>
                                </div>
                                <div id="tooltip-default" role="tooltip"
                                     className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                                    Tooltip content
                                    <div className="tooltip-arrow" data-popper-arrow></div>
                                </div>


                                <div className={'bg-white hover:bg-[#0aad0a] hover:text-white rounded-lg w-9 h-9 shadow-beautiful flex items-center justify-center'}>
                                    <AiOutlineHeart size={17}/>
                                </div>
                                <div className={'bg-white hover:bg-[#0aad0a] hover:text-white rounded-lg w-9 h-9 shadow-beautiful flex items-center justify-center'}>
                                    <BsArrowLeftRight size={17}/>
                                </div>
                            </div>
                        </div>


                        <div className="space-y-1">
                            <p className={'text-[13px] font-bold text-gray-400'}>Snack & Munchies</p>
                            <h1 className={'text-gray-700'}>Haldiram's Sev Bhujia</h1>
                            <div className="flex space-x-1 items-center space-x-3">
                                <div className="flex">
                                    <BsStarFill className={'text-yellow-500'} size={13}/>
                                    <BsStarFill className={'text-yellow-500'} size={13}/>
                                    <BsStarFill className={'text-yellow-500'} size={13}/>
                                    <BsStarFill className={'text-yellow-500'} size={13}/>
                                    <BsStarHalf className={'text-yellow-500'} size={13}/>
                                </div>
                                <div className="">
                                    <p className={'text-[13px] text-gray-400'}>4.5 <span>(419)</span></p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between ">
                                <div className="">
                                    <p>$18 <span className={'line-through text-gray-400'} >$24</span></p>
                                </div>
                                <button type="button"
                                        className="  text-white bg-[#0aad0a]  rounded text-sm px-3 py-1 text-center flex items-center  "><BsPlus/> <span className={'font-[14px]'} >Add</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" col-span-10 md:col-span-5 lg:col-span-2">
                    <div className="border hover:border-[#0aad0a] h-[100%] p-[15px] rounded-lg  m-2">
                        <span className={'bg-green-500 text-white  text-[13px] px-2.5 py-1  rounded-full'} >14%</span>
                        <div className="relative flex items-center justify-center group">
                            <img src={require("../../assets/images/product-img-2.jpg")} alt=""/>
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


                        <div className="space-y-1">
                            <p className={'text-[13px] font-bold text-gray-400'}>Bakery and Biscuits</p>
                            <h1 className={'text-gray-700'}>NutriChoice Digestive</h1>
                            <div className="flex space-x-1 items-center space-x-3">
                                <div className="flex">
                                    <BsStarFill className={'text-yellow-500'} size={13}/>
                                    <BsStarFill className={'text-yellow-500'} size={13}/>
                                    <BsStarFill className={'text-yellow-500'} size={13}/>
                                    <BsStarFill className={'text-yellow-500'} size={13}/>
                                    <BsStarHalf className={'text-yellow-500'} size={13}/>
                                </div>
                                <div className="">
                                    <p className={'text-[13px] text-gray-400'}>4.5 <span>(25)</span></p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between ">
                                <div className="">
                                    <p>$24 <span className={'line-through text-gray-400'} ></span></p>
                                </div>
                                <button type="button"
                                        className="  text-white bg-[#0aad0a]  rounded text-sm px-3 py-1 text-center flex items-center  "><BsPlus/> <span className={'font-[14px]'} >Add</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" col-span-10 md:col-span-5 lg:col-span-2">
                    <div className="border hover:border-[#0aad0a] h-[100%] p-[15px] rounded-lg  m-2">
                        {/*<span className={'bg-red-500 text-white  text-[13px] px-2.5 py-1  rounded-full'} ></span>*/}
                        <div className="relative flex items-center justify-center group">
                            <img src={require("../../assets/images/product-img-3.jpg")} alt=""/>
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


                        <div className="space-y-1">
                            <p className={'text-[13px] font-bold text-gray-400'}>Bakery & Biscuits</p>
                            <h1 className={'text-gray-700'}>Cadbury 5 Star Chocolate</h1>
                            <div className="flex space-x-1 items-center space-x-3">
                                <div className="flex">
                                    <BsStarFill className={'text-yellow-500'} size={13}/>
                                    <BsStarFill className={'text-yellow-500'} size={13}/>
                                    <BsStarFill className={'text-yellow-500'} size={13}/>
                                    <BsStarFill className={'text-yellow-500'} size={13}/>
                                    <BsStarHalf className={'text-yellow-500'} size={13}/>
                                </div>
                                <div className="">
                                    <p className={'text-[13px] text-gray-400'}>4.5 <span>(469)</span></p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between ">
                                <div className="">
                                    <p>$32 <span className={'line-through text-gray-400'} >$35</span></p>
                                </div>
                                <button type="button"
                                        className="  text-white bg-[#0aad0a]  rounded text-sm px-3 py-1 text-center flex items-center  "><BsPlus/> <span className={'font-[14px]'} >Add</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" col-span-10 md:col-span-5 lg:col-span-2">
                    <div className="border hover:border-[#0aad0a] p-[15px] h-[100%] rounded-lg  m-2">
                        <span className={'bg-red-500 text-white  text-[13px] px-2.5 py-1  rounded-full'} >Hot</span>
                        <div className="relative flex items-center justify-center group">
                            <img src={require("../../assets/images/product-img-4.jpg")} alt=""/>
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


                        <div className="space-y-1">
                            <p className={'text-[13px] font-bold text-gray-400'}>Snack & Munchies</p>
                            <h1 className={'text-gray-700'}>Onion Flavour Potato</h1>
                            <div className="flex space-x-1 items-center space-x-3">
                                <div className="flex">
                                    <BsStarFill className={'text-yellow-500'} size={13}/>
                                    <BsStarFill className={'text-yellow-500'} size={13}/>
                                    <BsStarFill className={'text-yellow-500'} size={13}/>
                                    <BsStarFill className={'text-yellow-500'} size={13}/>
                                    <BsStarHalf className={'text-yellow-500'} size={13}/>
                                </div>
                                <div className="">
                                    <p className={'text-[13px] text-gray-400'}>3.5 <span>(459)</span></p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between ">
                                <div className="">
                                    <p>$3 <span className={'line-through text-gray-400'} >$5</span></p>
                                </div>
                                <button type="button"
                                        className="  text-white bg-[#0aad0a]  rounded text-sm px-3 py-1 text-center flex items-center  "><BsPlus/> <span className={'font-[14px]'} >Add</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" col-span-10 md:col-span-5 lg:col-span-2">
                    <div className="border hover:border-[#0aad0a] p-[15px] h-[100%] rounded-lg  m-2">
                        {/*<span className={'bg-red-500 text-white  text-[13px] px-2.5 py-1  rounded-full'} >Sale</span>*/}
                        <div className="relative flex items-center justify-center group">
                            <img src={require("../../assets/images/product-img-5.jpg")} alt=""/>
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


                        <div className="space-y-1">
                            <p className={'text-[13px] font-bold text-gray-400'}>Instant Food</p>
                            <h1 className={'text-gray-700'}>Salted Instant Popcorn</h1>
                            <div className="flex space-x-1 items-center space-x-3">
                                <div className="flex">
                                    <BsStarFill className={'text-yellow-500'} size={13}/>
                                    <BsStarFill className={'text-yellow-500'} size={13}/>
                                    <BsStarFill className={'text-yellow-500'} size={13}/>
                                    <BsStarFill className={'text-yellow-500'} size={13}/>
                                    <BsStarHalf className={'text-yellow-500'} size={13}/>
                                </div>
                                <div className="">
                                    <p className={'text-[13px] text-gray-400'}>4.5 <span>(39)</span></p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between ">
                                <div className="">
                                    <p>$13 <span className={'line-through text-gray-400'} >$18</span></p>
                                </div>
                                <button type="button"
                                        className="  text-white bg-[#0aad0a]  rounded text-sm px-3 py-1 text-center flex items-center  "><BsPlus/> <span className={'font-[14px]'} >Add</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className=" col-span-10 md:col-span-5 lg:col-span-2">
                    <div className="border hover:border-[#0aad0a] h-[100%] p-[15px] rounded-lg  m-2">
                        <span className={'bg-red-500 text-white  text-[13px] px-2.5 py-1  rounded-full'} >Sale</span>
                        <div className="relative flex items-center justify-center group">
                            <img src={require("../../assets/images/product-img-6.jpg")} alt=""/>
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


                        <div className="space-y-1">
                            <p className={'text-[13px] font-bold text-gray-400'}>Dairy, Bread & Eggs</p>
                            <h1 className={'text-gray-700'}>Blueberry Greek Yogurt</h1>
                            <div className="flex space-x-1 items-center space-x-3">
                                <div className="flex">
                                    <BsStarFill className={'text-yellow-500'} size={13}/>
                                    <BsStarFill className={'text-yellow-500'} size={13}/>
                                    <BsStarFill className={'text-yellow-500'} size={13}/>
                                    <BsStarFill className={'text-yellow-500'} size={13}/>
                                    <BsStarHalf className={'text-yellow-500'} size={13}/>
                                </div>
                                <div className="">
                                    <p className={'text-[13px] text-gray-400'}>4.5 <span>(189)</span></p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between ">
                                <div className="">
                                    <p>$18 <span className={'line-through text-gray-400'} >$24</span></p>
                                </div>
                                <button type="button"
                                        className="  text-white bg-[#0aad0a]  rounded text-sm px-3 py-1 text-center flex items-center  "><BsPlus/> <span className={'font-[14px]'} >Add</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" col-span-10 md:col-span-5 lg:col-span-2">
                    <div className="border hover:border-[#0aad0a] h-[100%] p-[15px] rounded-lg  m-2">
                        {/*<span className={'bg-red-500 text-white  text-[13px] px-2.5 py-1  rounded-full'} >Sale</span>*/}
                        <div className="relative flex items-center justify-center group">
                            <img src={require("../../assets/images/product-img-7.jpg")} alt=""/>
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


                        <div className="space-y-1">
                            <p className={'text-[13px] font-bold text-gray-400'}>Dairy, Bread & Eggs</p>
                            <h1 className={'text-gray-700'}>Britannia Cheese Slices</h1>
                            <div className="flex space-x-1 items-center space-x-3">
                                <div className="flex">
                                    <BsStarFill className={'text-yellow-500'} size={13}/>
                                    <BsStarFill className={'text-yellow-500'} size={13}/>
                                    <BsStarFill className={'text-yellow-500'} size={13}/>
                                    <BsStarFill className={'text-yellow-500'} size={13}/>
                                    <BsStarHalf className={'text-yellow-500'} size={13}/>
                                </div>
                                <div className="">
                                    <p className={'text-[13px] text-gray-400'}>4.5 <span>(345)</span></p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between ">
                                <div className="">
                                    <p>$24 <span className={'line-through text-gray-400'} ></span></p>
                                </div>
                                <button type="button"
                                        className="  text-white bg-[#0aad0a]  rounded text-sm px-3 py-1 text-center flex items-center  "><BsPlus/> <span className={'font-[14px]'} >Add</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" col-span-10 md:col-span-5 lg:col-span-2">
                    <div className="border hover:border-[#0aad0a] h-[100%] p-[15px] rounded-lg  m-2">
                        {/*<span className={'bg-red-500 text-white  text-[13px] px-2.5 py-1  rounded-full'} >Sale</span>*/}
                        <div className="relative flex items-center justify-center group">
                            <img src={require("../../assets/images/product-img-8.jpg")} alt=""/>
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


                        <div className="space-y-1">
                            <p className={'text-[13px] font-bold text-gray-400'}>Instant Food</p>
                            <h1 className={'text-gray-700'}>Kellogg's Original Cereals</h1>
                            <div className="flex space-x-1 items-center space-x-3">
                                <div className="flex">
                                    <BsStarFill className={'text-yellow-500'} size={13}/>
                                    <BsStarFill className={'text-yellow-500'} size={13}/>
                                    <BsStarFill className={'text-yellow-500'} size={13}/>
                                    <BsStarFill className={'text-yellow-500'} size={13}/>
                                    <BsStarHalf className={'text-yellow-500'} size={13}/>
                                </div>
                                <div className="">
                                    <p className={'text-[13px] text-gray-400'}>4 <span>(90)</span></p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between ">
                                <div className="">
                                    <p>$32 <span className={'line-through text-gray-400'} >$35</span></p>
                                </div>
                                <button type="button"
                                        className="  text-white bg-[#0aad0a]  rounded text-sm px-3 py-1 text-center flex items-center  "><BsPlus/> <span className={'font-[14px]'} >Add</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" col-span-10 md:col-span-5 lg:col-span-2">
                    <div className="border hover:border-[#0aad0a] h-[100%] p-[15px] rounded-lg  m-2">
                        {/*<span className={'bg-red-500 text-white  text-[13px] px-2.5 py-1  rounded-full'} >Sale</span>*/}
                        <div className="relative flex items-center justify-center group">
                            <img src={require("../../assets/images/product-img-9.jpg")} alt=""/>
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


                        <div className="space-y-1">
                            <p className={'text-[13px] font-bold text-gray-400'}>Snack & Munchies</p>
                            <h1 className={'text-gray-700'}>Slurrp Millet Chocolate</h1>
                            <div className="flex space-x-1 items-center space-x-3">
                                <div className="flex">
                                    <BsStarFill className={'text-yellow-500'} size={13}/>
                                    <BsStarFill className={'text-yellow-500'} size={13}/>
                                    <BsStarFill className={'text-yellow-500'} size={13}/>
                                    <BsStarFill className={'text-yellow-500'} size={13}/>
                                    <BsStarHalf className={'text-yellow-500'} size={13}/>
                                </div>
                                <div className="">
                                    <p className={'text-[13px] text-gray-400'}>4.5 <span>(39)</span></p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between ">
                                <div className="">
                                    <p>$3 <span className={'line-through text-gray-400'} >$5</span></p>
                                </div>
                                <button type="button"
                                        className="  text-white bg-[#0aad0a]  rounded text-sm px-3 py-1 text-center flex items-center  "><BsPlus/> <span className={'font-[14px]'} >Add</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" col-span-10 md:col-span-5 lg:col-span-2">
                    <div className="border hover:border-[#0aad0a] h-[100%] p-[15px] rounded-lg  m-2">
                        {/*<span className={'bg-red-500 text-white  text-[13px] px-2.5 py-1  rounded-full'} >Sale</span>*/}
                        <div className="relative flex items-center justify-center group">
                            <img src={require("../../assets/images/product-img-10.jpg")} alt=""/>
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


                        <div className="space-y-1">
                            <p className={'text-[13px] font-bold text-gray-400'}>Dairy, Bread & Eggs</p>
                            <h1 className={'text-gray-700'}>Amul Butter - 500 g</h1>
                            <div className="flex space-x-1 items-center space-x-3">
                                <div className="flex">
                                    <BsStarFill className={'text-yellow-500'} size={13}/>
                                    <BsStarFill className={'text-yellow-500'} size={13}/>
                                    <BsStarFill className={'text-yellow-500'} size={13}/>
                                    <BsStarFill className={'text-yellow-500'} size={13}/>
                                    <BsStarHalf className={'text-yellow-500'} size={13}/>
                                </div>
                                <div className="">
                                    <p className={'text-[13px] text-gray-400'}>4.5 <span>(39)</span></p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between ">
                                <div className="">
                                    <p>$13 <span className={'line-through text-gray-400'} >$18</span></p>
                                </div>
                                <button type="button"
                                        className="  text-white bg-[#0aad0a]  rounded text-sm px-3 py-1 text-center flex items-center  "><BsPlus/> <span className={'font-[14px]'} >Add</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default MyComponent;
