import { useState, useEffect } from "react";


const useAuth = () => {
  const [isLogged, setIsLogged] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLogged(!!token);
  }, []); 

  return isLogged;
};

export default useAuth;