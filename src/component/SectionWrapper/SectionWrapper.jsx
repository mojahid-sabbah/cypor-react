import React from 'react'
import "./SectionWrapper.css"

export default function SectionWrapper(props) {
  return (
    <div className="section-wrapper">
        {props.children}
        </div>
  )
}
