import React, {useEffect, useState} from 'react';

function Timer() {
    const d = new Date();
    const [day,setDay] = useState(d.getDate())
    const [hour,setHour] = useState(d.getHours())
    const [minu,setMinu] = useState(d.getMinutes())
    const [sec,setSec] = useState(60)
    const [counter,setCounter] = useState(60)

    // useEffect(()=>{
    //     counter > 0 && setTimeout(()=> setCounter(counter-1),1000)
    // },[counter])

    const run = () =>{
        if(counter > 0){
            setTimeout(()=>setCounter(counter-1),1000)
        }

        if(counter === 0){
            setTimeout(()=>setMinu(minu-1))
            setCounter(prevState => prevState+60)
        }
    }
    run();


    return (
        <div className="w-[80%] mx-auto">
            <div className={'grid grid-cols-12'}>
                <div className="col-span-4 ">
                    <div className="flex justify-center">
                        <div className="w-12 h-12  rounded-lg border flex items-center justify-center h-full">
                            <div className="flex flex-col items-center">
                                <p className={'text-[12px]'}>{day}</p>
                                <p className={'text-gray-400 text-[12px]'}>Days</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-4 ">
                    <div className="flex justify-center">
                        <div className="w-12 h-12  rounded-lg border flex items-center justify-center h-full">
                            <div className="flex flex-col items-center">
                                <p className={'text-[12px]'}>{hour}</p>
                                <p className={'text-gray-400 text-[12px]'}>Hours</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-4 ">
                    <div className="flex justify-center">
                        <div className="w-12 h-12  rounded-lg border flex items-center justify-center h-full">
                            <div className="flex flex-col items-center">
                                <p className={'text-[12px]'}>{minu}</p>
                                <p className={'text-gray-400 text-[12px]'}>Mins</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-12 ">
                    <div className="flex justify-center mt-2.5">
                        <div className="w-12 h-12  rounded-lg border flex items-center justify-center h-full">
                            <div className="flex flex-col items-center">
                                <p className={'text-[12px]'}>{
                                    counter
                                }</p>
                                <p className={'text-gray-400 text-[12px]'}>Secs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Timer;