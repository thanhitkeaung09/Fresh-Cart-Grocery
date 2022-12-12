import React, {useState} from 'react';

function CategoryFirstCol(props) {
    const [arr,setArr] = useState(["Vegetables & Fruits","Breakfast & instant food",'Bakery & Biscuits',"Atta, rice & dal","Sauces & spreads","Organic & gourmet","Baby care","Cleaning essentials","Personal care"])
    return (
        <div className="col-span-6 md:col-span-2 my-2 md:my-0">
            <div className="space-y-2">
                <h1 className={'text-sm font-bold'}>Categories</h1>
                <ul className={'space-y-1'}>
                    {
                        arr.map((item,index)=>
                            <li key={index} className={'text-[#5c6c75] hover:text-[#0aad0a]'}>
                                <a href="#" className={'text-sm'}>{item}</a>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    );
}

export default CategoryFirstCol;