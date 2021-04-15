
import './NavigationBar.css';
import './Logo.css';
import Logo from './Logo';

function NavigationBar() {
  return (
    <div className="navigationBar">
      <div className="tabRoulette">
        <Logo></Logo>
        <element className = "tab">
          <p>
            Posts
          </p>
        </element>
        <element className = "tab">
          <p>
            Map
          </p>
        </element>
        <element className = "tab">
          <p>
            Timeline
          </p>
        </element>
        <element className = "tab">
          <p>
            Events
          </p>
        </element>
        <element className = "tab">
          <p>
            FAQ
          </p>
        </element>
      </div>
      <div className = 'orgRoulette'>
          <element className = "tab">
              <p>
                  About Us
              </p>
          </element>
          <element className = "donateButton">
              <element className = "background">
                  <element className = "text">
                      <p>
                          Donate
                      </p>
                  </element>
              </element>
          </element>
      </div>
    </div>
  );
}

export default NavigationBar;