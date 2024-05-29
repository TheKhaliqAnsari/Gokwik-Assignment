import React from 'react'
import Button from './Button'

function InputForm() {
  return (
    <div>
        <h2>Login to Dashboard</h2>
        <input type='text' placeholder='Email or Mobile Number' />
        <Button />
    </div>
  )
}

export default InputForm