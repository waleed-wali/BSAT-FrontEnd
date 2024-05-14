import React from 'react'

const CustomButton = ({ title, handleClick }) => {
    return (
        <button
            onClick={handleClick}
            type="submit"
            className="w-full p-2 bg-teal-600 text-white rounded hover:bg-teal-900"
        >
            {title}
        </button>
    )
}

export default CustomButton