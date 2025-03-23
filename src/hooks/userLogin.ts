

const userLogin = async (email:string, password:string) =>  {
{
    try {
      const response = await fetch(
        "/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );
      
      const data = await response.json();
      console.log(data);
  
      localStorage.setItem("token", data.user.token);
    } catch (error) {
     return error
    } finally {
      console.log("finally");
    }

}
};

export default userLogin