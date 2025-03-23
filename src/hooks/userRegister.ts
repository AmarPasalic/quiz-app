



const createUser = async (email: string, password: string, userName: string, lastName: string = 'a') => {

    try {
      const response = await fetch(
        "/api/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
           email,
           password,
           
         "lastName": lastName,
          "username": userName
          }),
        }
      
     
      );
      const data = await response.json();
      console.log(data);
      localStorage.setItem("token", data.user.token);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("Finally");
    }
  
};
export default createUser;

