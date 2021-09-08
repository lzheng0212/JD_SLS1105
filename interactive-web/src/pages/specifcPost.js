import React, { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";
import Footer from '../component/Footer';
import './specificPost.css';
import ReactHtmlParser from 'react-html-parser';

//rfc
//Collection on database must have a field named "createdAt"

export default function SpecifcPost() {
    const content = {
        margin: '20px',
        marginLeft: '80px',
        marginRight: '80px',
        fontSize: '20px',
        lineHeight: '30px',
        fontWeight: '500'
    };

    const category = {
        margin: '20px',
        marginLeft: '80px',
        marginRight: '80px',
        fontSize: '20px',
        lineHeight: '30px',
        fontWeight: '500',
        fontStyle: 'italic'
    }
    const [docs, setDocs] = useState();
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        projectFirestore.collection("testPost").get().then((snapshot) => {
            setDocs(snapshot.docs)
            setLoaded(true)
        })
    }, [])

    if (!loaded) {
        return (
            <>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <p>LOADING</p>
            </>
        )
    } else {
        console.log(docs[0].data())
    }
    return (
        <>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <p id="specificPostBody"></p>
            <p>{docs[0].data().title}</p>
            <p>{docs[0].data().author}</p>
            <p>{ReactHtmlParser(docs[0].data().content)}</p>
            <Footer />
        </>

    );

}

