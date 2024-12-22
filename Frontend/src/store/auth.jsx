/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [serviceData, setServiceData] = useState([]);
  const authorizationToken = `Bearer ${token}`;
  const storeToken = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  let isLoggedIn = !!token;
  const logout = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  const API = `http://localhost:3000`;

  const userAuthentication = async () => {
    try {
      const response = await fetch(`${API}/api/auth/user`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log("currently loggedIn user data", data.userData);
        setUser(data.userData);
      }
    } catch (error) {
      console.log("user data not found", error);
    }
  };

  const getDervices = async () => {
    try {
      const response = await fetch(`${API}/api/data/service`, {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        setServiceData(data.msg);
        // console.log(data.msg);
      }
    } catch (error) {
      console.log("frontend server error", error);
    }
  };
  useEffect(() => {
    getDervices();
    userAuthentication();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        storeToken,
        logout,
        isLoggedIn,
        user,
        serviceData,
        authorizationToken,
        API,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
