import React from "react";
import User from "./User";

function UsersList() {


    return (
        <>
            user list
            <br/>
            ---------------
            <br/>
            {data.map((person) => {
                const {id, name, age, image} = person;
                <User/>
            })}}

        </>
    )
}

export default UsersList;