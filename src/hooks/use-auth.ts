import { useState, useEffect } from "react";

interface User {
  email: string;
  name: string;
  plan?: "year" | "trial";
  hasPaid?: boolean;
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem("laundri_user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Error parsing stored user:", error);
        localStorage.removeItem("laundri_user");
      }
    }
    setIsLoading(false);
  }, []);

  const login = (userData: User) => {
    localStorage.setItem("laundri_user", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("laundri_user");
    setUser(null);
  };

  const updateUser = () => {
    const storedUser = localStorage.getItem("laundri_user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Error parsing stored user:", error);
      }
    }
  };

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
    hasPaid: user?.hasPaid || false,
    hasAIAccess: user?.hasPaid && user?.plan === "year",
    login,
    logout,
    updateUser,
  };
}
