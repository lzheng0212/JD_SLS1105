import React, { useState, useEffect } from "react";
import useFirestore from '../hooks/useFirestore';

//rfc
//Collection on database must have a field named "createdAt"

export default function SpecifcPost() {

    const { docs } = useFirestore("schools");
    //docs right now is an array of 1 element.
    //in that 1 element it has all its attributes and can be accessed
    //using .(name of attribute)
    // console.log(docs[0].url);
    // console.log(docs);
    return (
        <>
            <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                
                {docs.map((doc) => (
                    <>
                        <h1>{doc.postTitle}</h1>
                        <p>Content!</p>
                        <p>{doc.url}</p>
                    </>
                ))}

            </div>
        </>
    );
}

