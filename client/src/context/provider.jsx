import { useEffect, useState } from "react";
import { AppContext } from ".";

const AppContextProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState({
    userId: "",
    username: "",
    token: "",
  });

  useEffect(() => {
    const authToken = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    if (authToken) {
      setUser({
        token: authToken,
        userId: user.userId,
        username: user.username,
      });
    }
    setLoading(false);
  }, []);
  if (isLoading) return <p>Loading...</p>;
  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
