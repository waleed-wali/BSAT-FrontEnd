import React from 'react'

const InputField = ({placeholder, onchangeText, type}) => {
  return (
    <input
    onChange={(e) =>{onchangeText(e.target.value)}}
    type={type}
    placeholder={placeholder}
    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-teal-600"
  />
  )
}

export default InputField