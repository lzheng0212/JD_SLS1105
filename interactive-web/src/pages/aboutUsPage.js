import React from 'react'
import './aboutUsPage.css';
import stuffImage from '../assets/stuffImage.png';
import Footer from '../component/Footer';

export default function PostSection() {
    return (
        <>
            
            <div class="top">
                 <h1 class="h1top">Our team</h1>
            </div>
            <div class="ourTeam">
                <section class="stuff">
                    {/* <div class="stuffRow"> */}
                        <div class="stuffCol1">
                            <img class="stuffImage" src={stuffImage} alt="Stuff"/>
                            <h2>Name/Description</h2>
                        </div>
                        <div class="stuffCol2">
                            <img class="stuffImage" src={stuffImage} alt="Stuff"/>
                            <h2>Name/Description</h2>
                        </div>
                        <div class="stuffCol3">
                            <img class="stuffImage" src={stuffImage} alt="Stuff"/>
                            <h2>Name/Description</h2>
                        </div>
                    {/* </div> */}
                    {/* <div class="stuffRow"> */}
                        <div class="stuffCol1">
                            <img class="stuffImage" src={stuffImage} alt="Stuff"/>
                            <h2>Name/Description</h2>
                        </div>
                        <div class="stuffCol2">
                            <img class="stuffImage" src={stuffImage} alt="Stuff"/>
                            <h2>Name/Description</h2>
                        </div>
                        <div class="stuffCol3">
                            <img class="stuffImage" src={stuffImage} alt="Stuff"/>
                            <h2>Name/Description</h2>
                        </div>
                    {/* </div> */}
                </section>
            </div>
            <hr class="horizontalLine"></hr>
            <section id="aboutUs"> 
                <div class="AMV">
                    <h1 class="aboutUSTitle">About Us</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap 
                    into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                    passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap 
                    into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                    passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div class="AMV">
                    <h1 class="aboutUSTitle">Mission</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap 
                    into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                    passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap 
                    into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                    passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div class="AMV">
                    <h1 class="aboutUSTitle">Vision</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap 
                    into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                    passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap 
                    into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                    passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </section>
            <hr class="horizontalLine"></hr>
            <div class="contactUs">
                <h2>Contact Us</h2>
                <h3>Telephone: 404-555-8888</h3>
                <h3>Telephone: 404-555-8888</h3>
                <h3>Telephone: 404-555-8888</h3>
            </div>
            <Footer/>
        </>
    );
}