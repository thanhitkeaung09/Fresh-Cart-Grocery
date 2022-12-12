import React, {useState} from 'react';
import CategoryFirstCol from "./CategoryFirstCol";
import CategorySecondCol from "./CategorySecondCol";
import CategoryThirdCol from "./CategoryThirdCol";
import CategoryFourthCol from "./CategoryFourthCol";
import CategoryFifthCol from "./CategoryFifthCol";
import CategorySixthCol from "./CategorySixthCol";
import Payment from "../Payment/Payment";
import LastFooter from "../Payment/LastFooter";

function FooterCategories(props) {
    // const [arr,setArr] = useState(["Vegetables & Fruits","Breakfast & instant food",'Bakery & Biscuits',"Atta, rice & dal","Sauces & spreads","Organic & gourmet","Baby care","Cleaning essentials","Personal care"])
    // const [arrone,setArrone] = useState(["Dairy, bread & eggs"])
    return (
        <div className={'bg-[#f0f3f2] py-[100px] '}>
            <div className="w-[90%] lg:w-[95%] md:w-[90%] xl:w-[80%] 2xl:w-[60%] mx-auto  z-50 ">
                <div className="grid grid-cols-12 pb-10 border-b border-b-gray-300">
                    <CategoryFirstCol/>
                    <CategorySecondCol/>
                    <CategoryThirdCol/>
                    <CategoryFourthCol/>
                    <CategoryFifthCol/>
                    <CategorySixthCol/>
                </div>

                <div className="grid grid-cols-12 border-b border-b-gray-300">
                    <Payment/>
                </div>

                <div className="grid grid-cols-12">
                    <LastFooter/>
                </div>
            </div>
        </div>
    );
}

export default FooterCategories;