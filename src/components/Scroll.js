import React from 'react'

export default function Scroll(props) {
    return (
        <div style={{ overflowY: 'scroll', height: '80vh' }}>
            {props.children}
        </div>
    )
}