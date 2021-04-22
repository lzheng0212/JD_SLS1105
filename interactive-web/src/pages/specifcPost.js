import React, { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

//rfc

export default function SpecifcPost() {

    const [schools, setSchools] = useState([]);
    const [loading, setLoading] = useState(false);

    const ref = projectFirestore.collection("schools");

    function getSchools() {
        setLoading(true);
        ref.onSnapshot((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
            items.push(doc.data());
        });
        setSchools(items);
        setLoading(false);
        });
    }

    useEffect(() => {
        getSchools();
    }, []);

    if (loading) {
        return <h1>Loading.... </h1>;
    }

    return (
        <>
            <div>
                <h1>Schools</h1>
                {schools.map((school) => (
                    <div key={school.id}>
                    <h2>{school.title}</h2>
                    <p>{school.desc}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

