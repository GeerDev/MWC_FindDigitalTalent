export const postUser = async( data ) => {

    const url = `http://localhost:4000/users`;
    await fetch(url, {
        method: 'POST', 
        body: JSON.stringify(data), 
        headers:{
          'Content-Type': 'application/json'
        }
      })
  

}



