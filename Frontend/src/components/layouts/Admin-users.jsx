import { useEffect, useState } from "react";
import { useAuth } from "../../store/auth";

export function AdminUser() {
  const { authorizationToken } = useAuth();
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/admin/users`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await fetch(
        `https://service-backend-9a8q.onrender.com/api/admin/users/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(`user after delete ${data}`);
        getAllUsers();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <section className=" bg-[#f0f3f6] min-h-screen">
      <div className="mb-6 p-6">
        <h1 className="text-2xl font-bold text-center">All Registered Users</h1>
      </div>

      <div className="overflow-x-auto p-6">
        <table className="min-w-full border  rounded-lg">
          <thead>
            <tr className=" text-left">
              <th className="py-2 px-4 border-b ">Username</th>
              <th className="py-2 px-4 border-b ">Email</th>
              <th className="py-2 px-4 border-b ">Phone</th>
              {/* <th className="py-2 px-4 border-b">Update</th> */}
              <th className="py-2 px-4 border-b ">Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((currData, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
                } hover:bg-gray-100 transition duration-200`}
              >
                <td className="py-2 px-4 border-b">{currData.username}</td>
                <td className="py-2 px-4 border-b">{currData.email}</td>
                <td className="py-2 px-4 border-b">{currData.phone}</td>
                {/* <td className="py-2 px-4 border-b">
                  <button className="bg-blue-400 hover:bg-blue-500 text-white px-3 py-1 rounded shadow-lg">
                    <b>Edit</b>
                  </button>
                </td> */}
                <td className="py-2 px-4 border-b">
                  <button
                    className="bg-red-400 hover:bg-red-500 text-white px-3 py-1 rounded shadow-lg"
                    onClick={() => deleteUser(currData._id)}
                  >
                    <b>Delete</b>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
