import React from 'react'
import './CSS/Alert.css'
import { useState } from 'react'

const Alert = (props) => {
   
    
  return (
    <div>
      <div className="Alertbar" style={{"display":props.showalert ? "inline" : "none","backgroundColor":(props.ok)?"green":"hsl(0, 64%, 42%)"}}>
  {props.message}
    </div>
</div>
  )
}

export default Alert
