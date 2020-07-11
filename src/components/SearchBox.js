import React from 'react'

export default function SearchBox({ searchChange }) {
    return (
        <div className="text-center mt-5 mb-5">
            <input className="text-center bg-yellow-400 focus:bg-white w-3/12 text-lg font-bold rounded-full"
                type="search"
                placeholder="Search...."
                onChange={searchChange} />
        </div>
    )
}