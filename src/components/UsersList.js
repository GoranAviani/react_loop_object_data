import React, {useState} from "react";
import User from "./User";
import data from "./data";

function UsersList() {
    const [people, setPeople] = useState(data)


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

        </>
    )
}

export default UsersList;