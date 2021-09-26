
import './Footer.css';
import Twitter from "../assets/twiiter.jpg";

function Footer() {
  return (
    <header className = "footer">
        <element className = "block">
            <element className = "list">
                <element className = "title">
                    <element className = "text">
                        <p>Fingertipe</p>
                    </element>
                </element>
                <element className = "linklist">
                    
                        <li><a href='/home'>Home</a></li>
                        <li><a href='/'>Map</a></li>
                        <li><a href='/'>Timeline</a></li>
                        <li><a href='/donate'>Donate</a></li>
                    
                </element>
            </element>

            <element className = "list">
                <element className = "title">
                    <element className = "text">
                        <p>Resources</p>
                    </element>
                </element>
                <element className = "linklist">
                    
                        <li><a href = "www.youtube.com">FAQ</a></li>
                        <li><a href = "/events">Event</a></li>
                        <li><a href = "/post">News</a></li>
                    
                </element>
            </element>


            <element className = "list">
                <element className = "title">
                    <element className = "text">
                        <p>About</p>
                    </element>
                </element>
                <element className = "linklist">
                    
                        <li><a href = "/aboutUs">About Us</a></li>
                        <li><a href = "www.youtube.com">Contact Us</a></li>
                    
                </element>
            </element>



                <element className = "title">
                    <element className = "text">
                        <element className = "linklist">
                            <element className = "logos">

                            <li><a href="https://twitter.com/intent/tweet?button_hashtag=twitter&ref_src=twsrc%5Etfw"><svg width="34" height="29" viewBox="0 0 34 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M33.4394 4.17895C32.2146 4.70729 30.8817 5.08754 29.5088 5.23563C30.9342 4.38883 32.0016 3.05101 32.5108 1.47319C31.1733 2.26886 29.708 2.8268 28.18 3.12226C27.5413 2.43952 26.769 1.89562 25.9109 1.52445C25.0529 1.15328 24.1276 0.962795 23.1927 0.96486C19.4103 0.96486 16.3683 4.03085 16.3683 7.79329C16.3683 8.32163 16.4324 8.84998 16.5364 9.35831C10.8728 9.06211 5.82148 6.35636 2.4633 2.21367C1.8514 3.25881 1.53075 4.44882 1.5347 5.65991C1.5347 8.02944 2.73948 10.1188 4.57667 11.3476C3.49399 11.305 2.43665 11.0074 1.49067 10.479V10.5631C1.49067 13.8812 3.83619 16.631 6.96222 17.2634C6.37527 17.4159 5.77147 17.4939 5.16505 17.4956C4.72077 17.4956 4.30049 17.4516 3.87622 17.3915C4.74078 20.0973 7.25841 22.0626 10.2564 22.1266C7.91083 23.9638 4.97293 25.0445 1.78286 25.0445C1.21049 25.0445 0.682145 25.0245 0.133789 24.9604C3.15975 26.9017 6.75008 28.0224 10.6166 28.0224C23.1687 28.0224 30.0372 17.6237 30.0372 8.59781C30.0372 8.30162 30.0372 8.00543 30.0172 7.70924C31.346 6.73661 32.5108 5.53182 33.4394 4.17895Z" fill="white"/>
</svg>
</a>
</li>
                        <li><a href ="https://www.facebook.com"><svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M31.5048 0.482422H2.04572C1.33726 0.482422 0.764893 1.05479 0.764893 1.76325V31.2224C0.764893 31.9308 1.33726 32.5032 2.04572 32.5032H31.5048C32.2133 32.5032 32.7857 31.9308 32.7857 31.2224V1.76325C32.7857 1.05479 32.2133 0.482422 31.5048 0.482422ZM27.8064 9.82849H25.2488C23.2435 9.82849 22.8552 10.7811 22.8552 12.182V15.268H27.6423L27.0179 20.0991H22.8552V32.5032H17.864V20.1032H13.6893V15.268H17.864V11.7057C17.864 7.57102 20.3896 5.31756 24.08 5.31756C25.8492 5.31756 27.3662 5.44965 27.8104 5.50968V9.82849H27.8064Z" fill="white"/>
</svg>
</a>
</li>
                        <li><a href ="https://www.linkedin.com/"><svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M31.4924 0.482422H2.03327C1.32481 0.482422 0.752441 1.05479 0.752441 1.76325V31.2224C0.752441 31.9308 1.32481 32.5032 2.03327 32.5032H31.4924C32.2008 32.5032 32.7732 31.9308 32.7732 31.2224V1.76325C32.7732 1.05479 32.2008 0.482422 31.4924 0.482422ZM10.2506 27.7681H5.49952V12.4862H10.2506V27.7681ZM7.87706 10.3969C7.33242 10.3969 6.8 10.2353 6.34714 9.93276C5.89428 9.63017 5.54132 9.20008 5.3329 8.6969C5.12447 8.19371 5.06994 7.64001 5.17619 7.10583C5.28245 6.57165 5.54472 6.08097 5.92984 5.69585C6.31497 5.31072 6.80564 5.04845 7.33983 4.94219C7.87401 4.83594 8.4277 4.89047 8.93089 5.0989C9.43408 5.30733 9.86416 5.66029 10.1668 6.11315C10.4693 6.566 10.6309 7.09842 10.6309 7.64307C10.6268 9.16405 9.39405 10.3969 7.87706 10.3969ZM28.0381 27.7681H23.2911V20.3353C23.2911 18.5622 23.259 16.2847 20.8215 16.2847C18.3519 16.2847 17.9716 18.2139 17.9716 20.2072V27.7681H13.2285V12.4862H17.7835V14.5756H17.8475C18.4799 13.3748 20.0289 12.106 22.3425 12.106C27.1536 12.106 28.0381 15.272 28.0381 19.3867V27.7681Z" fill="white"/>
</svg>
</a>

</li>
                    </element>
                    </element>
                    </element>
                </element>
                    <element className = "text">
                            <element className = "contact">
                                <div className="contactContainer" style={{width:"300px"}}>
                                    <svg width="30" height="39" viewBox="0 0 31 39" padding-bottom="30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5163 37.9768C14.8407 38.2085 15.2293 38.333 15.6279 38.333C16.0266 38.333 16.4152 38.2085 16.7396 37.9768C17.3223 37.5648 31.0169 27.6767 30.9613 15.3333C30.9613 6.87892 24.0824 0 15.6279 0C7.17352 0 0.294602 6.87892 0.294602 15.3238C0.239019 27.6767 13.9336 37.5648 14.5163 37.9768ZM15.6279 3.83333C21.9702 3.83333 27.1279 8.99108 27.1279 15.3429C27.1682 23.8491 18.7176 31.487 15.6279 33.9921C12.5402 31.4851 4.08769 23.8453 4.12794 15.3333C4.12794 8.99108 9.28568 3.83333 15.6279 3.83333Z" fill="white"/>
 </svg> 

                                        <text id="text1" >666 Anyplace Ave, Atlanta, Ga</text>
                                </div>
                                <div className = "contactContainer">
                                    <svg width="30" height="39" viewBox="0 0 22 34" padding-bottom="30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.6278 0.958008H4.96118C2.54035 0.958008 0.586182 2.91217 0.586182 5.33301V28.6663C0.586182 31.0872 2.54035 33.0413 4.96118 33.0413H16.6278C19.0487 33.0413 21.0028 31.0872 21.0028 28.6663V5.33301C21.0028 2.91217 19.0487 0.958008 16.6278 0.958008ZM13.7112 30.1247H7.87785V28.6663H13.7112V30.1247ZM18.4508 25.7497H3.13827V5.33301H18.4508V25.7497Z" fill="white"/>
</svg> 
                                    
                                    <text id="text1" >(123)456-7890</text>
                                </div>
                            </element>
                        </element>

        </element>
       
                
    </header>
  );
}

export default Footer;