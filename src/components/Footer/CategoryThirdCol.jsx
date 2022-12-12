import React, {useState} from 'react';

function CategoryThirdCol(props) {
    const [arr,setArr] = useState(["Company","About","Blog","Help Center","Our Value"]);
    return (
        <div className="col-span-6 md:col-span-2 my-2 md:my-0">
            <div className="space-y-2">
                <h1 className={'text-sm font-bold'}>Get to know us</h1>
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

export default CategoryThirdCol;