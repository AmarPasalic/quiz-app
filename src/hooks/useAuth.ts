import { useState, useEffect } from "react";
import fetchData from "./Fetchfn";

const useAuth = () => {
  const [isLogged, setIsLogged] = useState<boolean>(false);

  useEffect(() => {
    const checkAuth = async () => {
      const userData = await fetchData("/api/user", "GET");
      setIsLogged(!!userData);
    };

    checkAuth();
  }, []);

  return isLogged;
};

export default useAuth;