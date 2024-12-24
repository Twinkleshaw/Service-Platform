import { useEffect, useState } from "react";
import { useAuth } from "../../store/auth";

export function AdminContact() {
  const { authorizationToken } = useAuth();
  const [contact, setContact] = useState([]);

  const getAllContacts = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/admin/contacts`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      if (response.ok) {
        const contactData = await response.json();
        setContact(contactData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteById = async (id) => {
    console.log(id);
    try {
      const response = await fetch(
        `https://service-backend-9a8q.onrender.com/api/admin/contacts/delete/${id}`,
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
        getAllContacts();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllContacts();
  }, []);

  return (
    <section className="bg-[#f0f3f6] min-h-screen">
      <div className="mb-6 p-6">
        <h1 className="text-2xl font-bold text-center">All Contact Messages</h1>
      </div>

      <div className="overflow-x-auto p-6">
        <table className="min-w-full border rounded-lg">
          <thead>
            <tr className="text-left">
              <th className="py-2 px-4 border-b">Username</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Message</th>
              <th className="py-2 px-4 border-b">Delete</th>
            </tr>
          </thead>
          <tbody>
            {contact.map((data, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
                } hover:bg-gray-100 transition duration-200`}
              >
                <td className="py-2 px-4 border-b">{data.username}</td>
                <td className="py-2 px-4 border-b">{data.email}</td>
                <td className="py-2 px-4 border-b">{data.message}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    className="bg-red-400 hover:bg-red-500 text-white px-3 py-1 rounded shadow-lg"
                    onClick={() => deleteById(data._id)}
                  >
                    Delete
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
