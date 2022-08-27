import React, {useState} from "react";
import User from "./User";
import data from "./data";

function UsersList() {
    const [people, setPeople] = useState(data)

    const addPersonToList = () => {
        console.log(people[0])
        setPeople(current => [...current, {
            id: 5320,
            name: 'Oliver Aviani',
            age: 2,
            image:
                '',
        }]);
    }


    return (
        <>
            user list
            <br/>
            ---------------
            <br/>
            ********************
            {people.map((person) => {
                return (
                    <>
                        <User person={person}/>
                        <br/>
                        *************************
                    </>
                )
            })}
            <button onClick={() => {
                addPersonToList()
            }}>Add person to list
            </button>
        </>
    )
}

export default UsersList;