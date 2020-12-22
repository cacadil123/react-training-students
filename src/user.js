import React from 'react'
import { useParams} from 'react-router-dom';

const User = () => {
    const { id } = useParams();

    return ( 
        <>
        <h1>usersID: {id} </h1>
        </>
     );
}
 
export default User;