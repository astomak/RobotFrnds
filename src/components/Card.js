import React from 'react'

export default function Card({ id, name, email }) {
    return (
        <div className="border-8 inline-grid mt-3 mr-8 bg-green-300 cursor-pointer 
                        transition duration-500 ease-in-out hover:bg-red-500 transform hover:-translate-y-1 hover:scale-110
                        rounded-full py-4 px-2">
            <img src={`https://robohash.org/${name}`} alt="Robot" />
            <h1 className="text-center text-md font-bold text-blue-800">{name}</h1>
            <p className="text-center text-blue-800">{email}</p>
        </div>
    )
}