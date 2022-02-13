export const sendEmail= async( data ) => {

    const url = `http://localhost:4000/users/sendEmail`;
    const resp = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data), 
        headers:{
          'Content-Type': 'application/json'
        }
      })

    const email = await resp.json();

    return email
}
