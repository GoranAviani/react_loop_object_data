import React from "react";

function User({people}) {
    console.log(people)


    return (
        <>
            {people.map((person) => {
                const {id, name, age, image} = person;
                return (
                    <>
                        Name: {name}
                        <br/>
                    </>
                )
            })}
        </>
    )
}

export default User;