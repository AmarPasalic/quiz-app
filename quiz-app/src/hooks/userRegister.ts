


  
const createUser = (email: string, password: string, firstName: string, lastName: string = '') => {
  fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email:email,
      password: password,
      firstName: firstName,
      lastName: lastName,
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};
export default createUser;

