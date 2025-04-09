

const userLogin = async (email: string, password: string) => {
  {
    try {
      const response = await fetch(
        "/apiauth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
           "email": email,
           "password": password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
       
        return { success: false, message: data.message || "Login failed" };
      }


      localStorage.setItem("token", data);

      return { success: true, token: data};
    } catch (error) {
      console.error("Error during login:", error);
      return { success: false, message: "Network error" };
    } finally {
      console.log("finally");
    }

  }
};

export default userLogin