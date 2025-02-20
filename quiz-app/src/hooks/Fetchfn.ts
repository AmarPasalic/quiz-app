const fetchData = async (url: string="", meth: string="GET", body: object={}) => {
    const token = localStorage.getItem("token")

    try {
      const response = await fetch(
       `${url}`,
  
        {
             method: meth,
          headers: {
            Authorization: `Bearer ${token}`,
          },
            body: JSON.stringify(body),
         
        }
      );
      const data = await response.json();
     return  data
    } catch (error) {
      console.log(error);
    } finally {
      console.log("finally");
    }
}
export default fetchData;