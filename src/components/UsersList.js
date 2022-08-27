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
            <User people={people}/>

        </>
    )
}

export default UsersList;