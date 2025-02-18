



const createUser = async (email: string, password: string, firstName: string, lastName: string = 'a') => {
console.log( typeof email, typeof password, firstName, lastName);
    try {
      const response = await fetch(
        "/api/user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
           email,
           password,
           firstName,
         "lastName": lastName,
          "username": "ksfqm"
          }),
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("Finally");
    }
  
};
export default createUser;

