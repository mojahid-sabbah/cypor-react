import React from 'react'
import './MostPopItems.css'
export default function MostPopItems(props) {
  return (
    <div className="most-pop-items">
        {props.children}
    </div>
  )
}
