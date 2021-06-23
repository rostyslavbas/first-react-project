import {useEffect, useState} from "react";
import './Users.css'

export default function Users() {


    let state = useState([]);
    let usersList = state[0];
    let setUsersList = state[1];

    //спрощений синтаксис
    //let [usersList, setUsersList] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(response => {
                console.log(response);
                setUsersList(response);
            })
    }, [])

    return (
        <div>
            {
                usersList.map(value =>
                    <div className={'comment'}>
                        <h1>{value.name}</h1>
                        <h2>{value.id}</h2>
                        <h2>{value.email}</h2>
                        <p>{value.body}</p>
                        <hr/>
                    </div>)
            }
        </div>
    );
}