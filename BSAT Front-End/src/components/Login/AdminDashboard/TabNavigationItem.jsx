import React from 'react';
import { useNavigate } from 'react-router-dom';

function TabNavigationItem({ label, icon, tabKey }) {
  const navigate = useNavigate();
  
  return (
    <a
      href="#"
      className="block py-2.5 px-4 rounded transition duration-200 flex gap-4 text-sm items-left justify-left space-x-2"
      onClick={() => navigate(`/admin-dashboard/${tabKey}`)}
    >
      <img src={icon} alt={label} className="h-5 w-5" />
      {label}
    </a>
  );
}

export default TabNavigationItem;
