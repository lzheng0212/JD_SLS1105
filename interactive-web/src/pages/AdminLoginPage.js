import React, { useState } from 'react';
import './AdminLoginPage.css'

import {projectAuth} from '../firebase/config';
import AdminPortal from './AdminPortal';

function AdminLoginPage() {

    const login = async (e) => {
        const email = document.getElementById("adminEmail").value
        const password = document.getElementById("adminPassword").value
        
        projectAuth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
        // Signed in   HERE YOU LINK TO ADMIN PORTAL
        const user = userCredential.user;
        console.log("You have signed in")
        console.log(email, password)
        document.getElementById("error").innerHTML = "You have signed in"
        window.location.assign('/adminPortal') //need to revise
        // ...
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
        document.getElementById("error").innerHTML = errorMessage
        });
    }

    return (
        <>
            <div class = "admin-center">
                <h1 class = "admin-h1">Admin login</h1>
                <b>Enter admin email and password</b>
                <br/><br/>
                <div class = "admin-container">
                    <div>
                        <label for="email" class = "admin-label">email</label>
                        <input type="text" id="adminEmail" name="adminEmail" class = "admin-label"></input>
                    </div>
                    <div>
                        <label for="password" class = "admin-label">password</label>
                        <input type="password" id="adminPassword" name="adminPassword" class = "admin-label"></input>
                    </div>
                    <button class = "admin-button" onClick={login}>Login</button>
                    <p id = "error"></p>
                </div>
            </div>
        </>
    )
}

export default AdminLoginPage
