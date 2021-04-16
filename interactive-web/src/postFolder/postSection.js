import React from 'react'
import greenField from './postImages/greenField.jpg';
import sunset from './postImages/sunset.jpg';
import apples from './postImages/apples.jpg';
import wheat from './postImages/wheat.jpg';
import './postStyle.css';
import Footer from '../component/Footer';


export default function PostSection() {
    return (
        <>
            <br></br>
            <br></br>
            <div class="ImageSection">
                <h1 class="headerTitle">Post Section</h1>
                <img id="greenFieldImage" src={greenField} alt="green field"/>
  		    </div>

            <section id="postSection"> 
                <div class="row"> 
                    <input type="text" placeholder="Search for a post..."></input>
                </div>

                <div class="row">
                    <div class="r1c1"> 
                        <img id="sunsetPost" src={sunset} width="515px" height="320px"/>
                        <h2> Title of post </h2>
                        <p> Date posted </p>
                        <p>Description</p>
                    </div>
                    <div class="r1c2"> 
                        <img id="sunsetPost" src={apples} width="515px" height="320px"/>
                        <h2> Title of post </h2>
                        <p> Date posted </p>
                        <p>Description</p>
                    </div>
                    <div class="r1c3"> 
                        <img id="sunsetPost" src={wheat} width="515px" height="320px"/>
                        <h2> Title of post </h2>
                        <p> Date posted </p>
                        <p>Description</p>
                    </div>
                </div>
                
                <div class="row">
                    <div class="r1c1"> 
                        <img id="sunsetPost" src={apples} width="515px" height="320px"/>
                        <h2> Title of post </h2>
                        <p> Date posted </p>
                        <p>Description</p>
                    </div>
                    <div class="r1c2"> 
                        <img id="sunsetPost" src={sunset} width="515px" height="320px"/>
                        <h2> Title of post </h2>
                        <p> Date posted </p>
                        <p>Description</p>
                    </div>
                    <div class="r1c3"> 
                        <img id="sunsetPost" src={wheat} width="515px" height="320px"/>
                        <h2> Title of post </h2>
                        <p> Date posted </p>
                        <p>Description</p>
                    </div>
                </div>
                <div class="row">
                    <div class="r1c1"> 
                        <img id="sunsetPost" src={wheat} width="515px" height="320px"/>
                        <h2> Title of post </h2>
                        <p> Date posted </p>
                        <p>Description</p>
                    </div>
                    <div class="r1c2"> 
                        <img id="sunsetPost" src={apples} width="515px" height="320px"/>
                        <h2> Title of post </h2>
                        <p> Date posted </p>
                        <p>Description</p>
                    </div>
                    <div class="r1c3"> 
                        <img id="sunsetPost" src={sunset} width="515px" height="320px"/>
                        <h2> Title of post </h2>
                        <p> Date posted </p>
                        <p>Description</p>
                    </div>
                </div>

                <div class="row">
                    <button class="showMorebtn"> Show more </button>
                </div>
            </section>
            <Footer/>
        </>
    )
}
