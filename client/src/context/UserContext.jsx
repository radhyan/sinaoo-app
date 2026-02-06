import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [titles, setTitles] = useState([]);
  const [earnedAchievement, setEarnedAchievement] = useState(null);

  useEffect(() => {
    // Fetch Titles
    const fetchTitles = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/titles");
        if (response.ok) {
          const data = await response.json();
          setTitles(data);
        }
      } catch (error) {
        console.error("Failed to fetch titles:", error);
      }
    };
    fetchTitles();

    // Initialize user from local storage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        refreshUser(parsedUser.username); // Fetch fresh data in background
      } catch (error) {
        console.error("Failed to parse user from local storage", error);
        localStorage.removeItem("user");
      }
    }
    setLoading(false);
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));

    if (userData.newAchievements && userData.newAchievements.length > 0) {
      console.log(
        "[UserContext] New Achievement Detected (Login):",
        userData.newAchievements[0].name,
      );
      setEarnedAchievement(userData.newAchievements[0]);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const refreshUser = async (username) => {
    if (!username) return;
    try {
      const response = await fetch(
        `http://localhost:3000/api/users/${username}`,
      );
      if (response.ok) {
        const freshData = await response.json();
        setUser((prev) => ({ ...prev, ...freshData }));
        localStorage.setItem("user", JSON.stringify(freshData));

        if (freshData.newAchievements && freshData.newAchievements.length > 0) {
          console.log(
            "[UserContext] New Achievement Detected (Refresh):",
            freshData.newAchievements[0].name,
          );
          setEarnedAchievement(freshData.newAchievements[0]);
        }
      } else {
        console.error("Failed to refresh user data");
      }
    } catch (error) {
      console.error("Error refreshing user data:", error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        logout,
        refreshUser,
        loading,
        titles,
        earnedAchievement,
        setEarnedAchievement,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
