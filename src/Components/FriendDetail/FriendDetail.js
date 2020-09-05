import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    let {friendId} = useParams() ;
    const [friend, setFriend] = useState({}) ;
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}` ;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    }, [])

    const {name, email, phone, website} = friend;
    return (
        <div>
            <p>this is friend detail of {friendId}</p>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Contact: {phone}</p>
            <p>Website: {website}</p>
        </div>
    );
};

export default FriendDetail;