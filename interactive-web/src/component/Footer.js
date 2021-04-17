
import './Footer.css';

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
                        <li><a href = "www.youtube.com">Event</a></li>
                        <li><a href = "www.youtube.com">News</a></li>
                    
                </element>
            </element>


            <element className = "list">
                <element className = "title">
                    <element className = "text">
                        <p>About</p>
                    </element>
                </element>
                <element className = "linklist">
                    
                        <li><a href = "www.youtube.com">About Us</a></li>
                        <li><a href = "www.youtube.com">Contact Us</a></li>
                    
                </element>
            </element>
        </element>
        
    </header>
  );
}

export default Footer;