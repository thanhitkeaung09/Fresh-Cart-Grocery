import React from 'react';
import {BsFacebook} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"

function LastFooter(props) {
    return (
        <>
            <div className={'col-span-12 md:col-span-8'}>
                <h1 className={'text-sm text-[#5c6c75] mt-5'}>Copyright 2022 © FreshCart eCommerce HTML Template. All rights reserved. Powered by</h1><h1 className={'text-sm text-[#0aad0a]'}>Codescandy</h1>
            </div>
            <div className={'col-span-12 md:col-span-4 '}>
                <div className="flex items-center space-x-3 md:justify-end mt-5">
                    <h1 className={'text-sm text-[#5c6c75] '} >Follow us on</h1>
                    <div className="space-x-2">
                        <button className=" group border border-gray-500 hover:border-[#0aad0a] p-1.5 rounded-lg">
                            <BsFacebook className={'text-gray-500 group-hover:text-[#0aad0a]'} />
                        </button>

                        <button className=" group border border-gray-500 hover:border-[#0aad0a] p-1.5 rounded-lg">
                            <BsTwitter className={'text-gray-500 group-hover:text-[#0aad0a]'} />
                        </button>

                        <button className=" group border border-gray-500 hover:border-[#0aad0a] p-1.5 rounded-lg">
                            <BsInstagram className={'text-gray-500 group-hover:text-[#0aad0a]'} />
                        </button>
                    </div>
                </div>
            </div>
        </>


    );
}

export default LastFooter;