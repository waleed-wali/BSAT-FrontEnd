import React, { useEffect, useState } from 'react';

const WebsiteAudit = () => {
  const [data, setData] = useState({
    revenue: 0,
    views: 0,
    newUsers: 0,
    visits: 0,
    siteHealth: 0,
    totalOrders: 0,
  });

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await fetch('/api/analytics');
        const result = await response.json();
        setData({
          revenue: result.revenue,
          views: result.views,
          newUsers: result.newUsers,
          visits: result.visits,
          siteHealth: result.siteHealth,
          totalOrders: result.totalOrders,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-6 w-full">
      <h1 className="text-2xl font-semibold mb-4">System Analytics</h1>

      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-sm text-gray-500">Revenue</h3>
          <p className="text-xl font-bold">{data.revenue}</p>
        </div>
        <div className="bg-teal-600 p-4 rounded-lg shadow-md text-white">
          <h3 className="text-sm">Views</h3>
          <p className="text-xl font-bold">{data.views}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-sm text-gray-500">New Users</h3>
          <p className="text-xl font-bold">{data.newUsers}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-sm text-gray-500">Visits</h3>
          <p className="text-xl font-bold">{data.visits}</p>
        </div>
      </div>

      {/* Health and Order Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-lg font-semibold mb-2">Site Health</h3>
          <div className="relative h-32 w-32 mx-auto">
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 36 36">
              <path
                className="text-gray-300"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                d="M18 2.0845a15.9155 15.9155 0 1 1 0 31.831 15.9155 15.9155 0 1 1 0-31.831"
              />
              <path
                className="text-teal-600"
                strokeDasharray={`${data.siteHealth}, 100`}
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                d="M18 2.0845a15.9155 15.9155 0 1 1 0 31.831 15.9155 15.9155 0 1 1 0-31.831"
              />
            </svg>
            <p className="absolute inset-0 flex items-center justify-center text-2xl font-semibold">{data.siteHealth}%</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-lg font-semibold mb-2">Total Orders</h3>
          <div className="relative h-32 w-32 mx-auto">
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 36 36">
              <path
                className="text-gray-300"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                d="M18 2.0845a15.9155 15.9155 0 1 1 0 31.831 15.9155 15.9155 0 1 1 0-31.831"
              />
              <path
                className="text-pink-600"
                strokeDasharray={`${data.totalOrders}, 100`}
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                d="M18 2.0845a15.9155 15.9155 0 1 1 0 31.831 15.9155 15.9155 0 1 1 0-31.831"
              />
            </svg>
            <p className="absolute inset-0 flex items-center justify-center text-2xl font-semibold">{data.totalOrders}%</p>
          </div>
        </div>
      </div>

      {/* Traffic Overview */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Overview</h3>
        <div className="relative h-64">
          <div className="absolute inset-0 flex justify-around">
            {/* Example placeholder bars */}
            <div className="h-full w-1/12 bg-teal-600 rounded-md"></div>
            <div className="h-5/6 w-1/12 bg-gray-300 rounded-md"></div>
            {/* You can add more dynamically generated bars here */}
          </div>
          <p className="absolute inset-x-0 bottom-0 text-center font-semibold">Aug - {data.siteHealth}%</p>
        </div>
      </div>
    </div>
  );
};

export default WebsiteAudit;
