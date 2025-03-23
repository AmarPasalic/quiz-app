const fetchData = async (url: string="/api/users", meth: string="GET", body?: object) => {
  const token = localStorage.getItem("token")
if(body === undefined && meth !== "GET"){
return console.error( "Body is required");
}
  try {
    const response = await fetch(
     `${url}`,

      {
           method: meth,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
          body: JSON.stringify(body),
       
      }
    );
    const data = await response.json();
   return  data
  } catch (error) {
    console.log(error);
    return false
  } finally {
    console.log("finally");
  }
}
export default fetchData;