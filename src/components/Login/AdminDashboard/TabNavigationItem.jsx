import React from 'react';

function TabNavigationItem({ label, icon, activeTab, setActiveTab, tabKey }) {
  return (
    <a
      href="#"
      className={`block py-2.5 px-4 rounded transition duration-200 flex gap-4 text-sm items-left justify-left space-x-2 ${
        activeTab === tabKey ? 'bg-gray-500' : ''
      }`}
      onClick={() => setActiveTab(tabKey)}
    >
      <img src={icon} alt={label} className="h-5 w-5" />
      {label}
    </a>
  );
}

export default TabNavigationItem;
