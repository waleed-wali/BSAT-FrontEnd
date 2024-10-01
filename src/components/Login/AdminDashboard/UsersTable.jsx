import React from 'react';

function UsersTable() {
  return (
    <main className="flex-grow p-6 bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Users</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Role</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Replace with dynamic data */}
            <tr>
              <td className="py-2 px-4 border-b">1</td>
              <td className="py-2 px-4 border-b">John Doe</td>
              <td className="py-2 px-4 border-b">john@example.com</td>
              <td className="py-2 px-4 border-b">Admin</td>
              <td className="py-2 px-4 border-b">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Edit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default UsersTable;
