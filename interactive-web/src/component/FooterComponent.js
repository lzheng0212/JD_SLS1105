import Footer from 'rc-footer';
import 'rc-footer/assets/index.css';
import './Footer.css';

function FooterComponent() {
  return (
    <Footer
    columns={[
      {
        title: 'Fingertipe',
        description: 'Fingertipe',
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
      }
    ]}
    bottom= "Made with ❤️ by Team 1105"
    style= {{textAlign: 'left', fontSize: '16px'}}
  />
  );
}

export default FooterComponent;