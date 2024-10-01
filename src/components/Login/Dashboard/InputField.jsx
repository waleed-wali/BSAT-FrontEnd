import React from 'react';

const InputField = ({ label, value, onChange, type = 'text' }) => (
  <div>
    <label className="block text-gray-700">{label}</label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={label}
      className="w-full p-2 border border-gray-300 rounded mt-1"
    />
  </div>
);

export default InputField;
