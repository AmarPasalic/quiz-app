



const createUser = async (email: string, password: string, userName: string) => {

  try {
    const response = await fetch(
      "https://quiz-be-zeta.vercel.app/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "email": email,
          "password": password,
          "username": userName
        }),
      }

    );
    const data = await response.json();

    if (!response.ok) {
      return { success: false, message: data.message || "Registration failed" };
    }
    localStorage.setItem("token", data);
    return { success: true, token: data };
  } catch (error) {
    console.error("Error during registration:", error);
    return { success: false, message: "Network error" };
  } finally {
    console.log("Finally");
  }

};
export default createUser;

