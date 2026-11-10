
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("campus_user"));
    } catch {
      return null;
    }
  });

  function login(email) {
    const newUser = { email };
    setUser(newUser);
    localStorage.setItem("campus_user", JSON.stringify(newUser));
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("campus_user");
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
