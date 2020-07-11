import React from 'react'
import Card from './Card'

export default function CardList({ data }) {
    console.log(data)
    const cardArray = data.map(user => {
        return <Card key={user.id} name={user.name} email={user.email} />
    })
    return (
        <div className="flex flex-wrap justify-center mt-5" >
            {cardArray}
        </div>
    )
}
