import React from 'react'

function Button({text, color, image = "", type = "Normal"}) {
  return (
    <div>
        {type === "Normal" ? (<></>) : (<></>)}
    </div>
  )
}

export default Button