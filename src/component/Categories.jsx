import React from 'react'
import logo from './image/logo.png'
import './Categories.css'
let Card =(props)=>{
    return ( <div className="card">
     <img src={logo} alt="" />
     <div className="card_info">
        <div className="details">
           
            <button className="card_title">{props.Title}</button>
       
         </div>
     </div>
 </div>
 )
 }

export default function Categories() {
  return (
      <>
          <div className="cards">
     <Card Title = "Fruits and Vegetables"
     />
     <Card Title = "Fruits and Vegetables"
      />
     <Card Title = "Fruits and Vegetables"
      />
    <Card Title = "Fruits and Vegetables"
              />
                 <Card Title = "Fruits and Vegetables"
     />
     <Card Title = "Fruits and Vegetables"
      />
     <Card Title = "Fruits and Vegetables"
      />
    <Card Title = "Fruits and Vegetables"
              />
                 <Card Title = "Fruits and Vegetables"
     />
     <Card Title = "Fruits and Vegetables"
      />
     <Card Title = "Fruits and Vegetables"
      />
    <Card Title = "Fruits and Vegetables"
              />
                 <Card Title = "Fruits and Vegetables"
     />
     <Card Title = "Fruits and Vegetables"
      />
     <Card Title = "Fruits and Vegetables"
      />
    <Card Title = "Fruits and Vegetables"
    />
              </div>
      </>
  )
}

