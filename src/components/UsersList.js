import React from "react";
import User from "./User";
import data from "./data";

function UsersList() {


    return (
        <>
            user list
            <br/>
            ---------------
            <br/>
            {data.map((person) => {
                <User person={person}/>;
            })}

        </>
    )
}

export default UsersList;