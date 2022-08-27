import React from "react";

function User({person}) {
    console.log(person)
    const {id, name, age, image} = person;


    return (
        <>
            Name: {name}
        </>
    )
}

export default User;