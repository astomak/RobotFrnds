import React from 'react'
import './header.css'

export default function Header() {
    return (
        <div id="header" className="mr-32 ml-32 rounded-full">
            <p className="text-extralarge font-extrabold text-red-500 text-center hover:text-orange-600 cursor-pointer">
                Robofriends
            </p>
        </div>
    )
}