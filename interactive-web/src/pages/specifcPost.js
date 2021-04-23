import React from "react";
import useFirestore from '../hooks/useFirestore';
import Footer from '../component/Footer';
import './specificPost.css';

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
        fontStyle:'italic'
    }

    const { docs } = useFirestore("testPost");
    //docs right now is an array of 1 element.
    //in that 1 element it has all its attributes and can be accessed
    //using .(name of attribute)
    // console.log(docs[0].url);
    //console.log(docs[1]);
    return (
        <>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div class="titleSection">
                {docs.map((doc) => (
                    <>
                        <h1>{doc.nameOfPost}</h1>
                        <h4>{doc.date}</h4>
                        <p>{doc.createdAt}</p>
                    </>
                ))}
            </div>

            <div class="body">
                {docs.map((doc) => (
                    <>
                        <p>{doc.postContent}</p>
                    </>
                ))}
            </div>
            <Footer/>
        </>
        
    );

}

