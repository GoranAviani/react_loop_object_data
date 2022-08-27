import React from "react";

function User({person}) {
    console.log(person)
    const {id, name, age, image} = person;

    return (
        <>
            <br/>
            ID: {id}
            <br/>
            Name: {name}
            <br/>
            Age: {age}

        </>
    )
}

export default User;