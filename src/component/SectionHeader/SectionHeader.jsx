import React from 'react'
import './SectionHeader.css'
export default function SectionHeader(props) {
  return (
    <div className="section-header">
    <h4>{props.children}</h4>
  </div>
  )
}
