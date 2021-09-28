import Footer from 'rc-footer';
import 'rc-footer/assets/index.css';
import './Footer.css';
import {TwitterOutlined, MobileOutlined, LinkedinOutlined, EnvironmentOutlined, FacebookOutlined} from '@ant-design/icons'

function FooterComponent() {
  return (
    <Footer
    columns={[
      {
        title: 'Fingertipe',
        description: 'Fingertipe',
        textAlign: 'left',
        items: [
          {
            title: 'Home',
            url: '/home',
          },
          {
            title: 'Map',
            url: '/map'
          },
          {
            title: 'Timeline',
            url: '/timeline'
          },
          {
            title: 'Donate',
            url: '/donate'
          },
        ]
      },
      {
        title: 'Resources',
        description: 'Resources',
        items: [
          {
            title: 'FAQ'
          },
          {
            title: 'Events',
            url: '/events'
          },
          {
            title: 'Posts',
            url: '/post'
          }
        ]
      },
      {
        title: 'About',
        description: 'About',
        items: [
          {
            title: 'About Us'
          },
          {
            title: 'Contact Us'
          }
        ]
      },
      {
        title: '',
        description: '',
        items: [
          {
            icon: <MobileOutlined/>,
            title: '404-123-4567',
            style: {}
          },
          {
            icon: <EnvironmentOutlined />,
            title: '666 Great St NW, Atlanta GA 30660'
          },
          {
            title: <div className='icon-grid'>
              <TwitterOutlined/>
              <FacebookOutlined style={{marginLeft: '12px'}}/>
              <LinkedinOutlined style={{marginLeft: '12px'}}/>
            </div>
            
          }
        ]
      }
    ]}
    bottom= "Made with ❤️ by Team 1105"
    style= {{textAlign: 'inherit', fontSize: '16px', overflow: 'auto'}}
  />
  );
}

export default FooterComponent;