import React from 'react'

export default function CandyElement( {candyColor, index, dragStart, dragDrop, dragEnd} : any ) {
    return (
        <img
            src={candyColor}
            alt={candyColor}
            data-id={index}
            draggable={true}
            onDragStart={dragStart}
            onDragOver={(e) => e.preventDefault()}
            onDragEnter={(e) => e.preventDefault()}
            onDragLeave={(e => e.preventDefault())}
            onDrop={dragDrop}
            onDragEnd={dragEnd}
        />
    )
}
