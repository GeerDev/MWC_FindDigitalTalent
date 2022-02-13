export const getUsers = async( ) => {

    const url = `http://localhost:4000/users`;
    const resp = await fetch( url );
    const data = await resp.json();

    const users = data.user.map( user => {
        return {
            id: user._id,
            name: user.name,
            description: user.description,
            image: user.image
        }
    })

    return users;


}