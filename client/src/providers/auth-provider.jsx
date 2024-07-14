import axios from "axios";
import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const initialState = {
  user: null,
  loading: true,
  logout: () => null,
};

export const AuthContext = createContext(initialState);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  async function logout() {
    Cookies.remove("authtoken");
  }

  useEffect(() => {
    async function fetchUser() {
      const backendUrl = import.meta.env.VITE_PUBLIC_BACKEND_URL;
      const token = Cookies.get("authtoken");
      if (token) {
        const { data } = await axios.get(`${backendUrl}/api/user/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(data);
      }
      setLoading(false);
    }

    fetchUser();
  }, []);

  const value = {
    user,
    loading,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
