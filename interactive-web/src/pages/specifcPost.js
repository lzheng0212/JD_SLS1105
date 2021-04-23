import React from "react";
import useFirestore from '../hooks/useFirestore';
import './specificPost.css'

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

    const { docs } = useFirestore("posts");
    //docs right now is an array of 1 element.
    //in that 1 element it has all its attributes and can be accessed
    //using .(name of attribute)
    // console.log(docs[0].url);
    // console.log(docs);
    return (
        <>
            <div className='specificPost-container'>


                {docs.map((doc) => (
                    <div className='item_info'>
                        <h1 style={{ font: 'Marcellus' }}>{doc.postTitle}</h1>
                        <h4 style={category}>Category: {doc.postCategory}</h4>
                        <h4 style={category}>Date: {doc.createdAt}</h4>
                        <h4 style={content}>{doc.postDesc}</h4>

                            <img style={{ width: '300px', height: 'auto' }}
                                className='img__cont'
                                alt='Post'
                                src={doc.url}
                            />
                       
                    </div>
                ))}

            </div>
        </>
        
    );

}

