import React from 'react'

const userLogin = () => {
    async function loginUser() {
        try {
          const response = await fetch(
            "https://0c6e-77-239-14-36.ngrok-free.app/login",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
             "email":"jasmin.fajkic+1@gmail.com",
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
      }
}

export default userLogin