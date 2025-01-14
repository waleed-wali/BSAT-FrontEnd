import React, { useEffect, useState } from 'react';
import { getAllUsers } from '../../../API/auth';

function UsersTable() {

  const [allUsers, setAllUsers] = useState();

  const fetchAllUsers = async () => {
    const response = await getAllUsers();
    console.log("response is ; ", response);
    if(response.success){
      setAllUsers(response.users)
    }
  }

  useEffect(() =>{
    fetchAllUsers();
  }, [])

  return (
    <main className="flex-grow p-6 bg-white">
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Users</h2>

        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="flex-1 py-2 px-4 border-b">SR..</th>
              <th className="flex-1 py-2 px-4 border-b">Name</th>
              <th className="flex-1 py-2 px-4 border-b">Email</th>
              <th className="flex-1 py-2 px-4 border-b">Role</th>
              {/* <th className="flex-1 py-2 px-4 border-b">Actions</th> */}
            </tr>
          </thead>
          <tbody>
            {/* Replace with dynamic data */}
            {allUsers?.map((user, index) =>{
              return <tr>
              <td className="flex-1 text-center py-2 px-4 border-b">{index+1}</td>
              <td className="flex-1 text-center py-2 px-4 border-b">{user.name}</td>
              <td className="flex-1 text-center py-2 px-4 border-b">{user.email} </td>
              <td className="flex-1 text-center py-2 px-4 border-b">{user.role == "0"? "User" : "Admin"} </td>
              {/* <td className="flex-1 text-center py-2 px-4 border-b">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Edit</button>
              </td> */}
            </tr>
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default UsersTable;
