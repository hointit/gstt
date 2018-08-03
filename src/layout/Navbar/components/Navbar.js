import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'
import phone from '../../../images/phone-call.svg'
import logo from '../../../images/logo.png'


class Navbar extends React.Component {
  render() {
    return (
        <Fragment>
          <header className='header d-flex flex-row'>
            <div className='header_content d-flex flex-row align-items-center'>


              <div className='logo_container'>
                <div className='logo'>
                  <img src={logo} alt='' />
                    <span>course</span>
                </div>
              </div>


              <nav className='main_nav_container'>
                <div className='main_nav'>
                  <ul className='main_nav_list'>
                    <li className='main_nav_item'><a href='#'>home</a></li>
                    <li className='main_nav_item'><a href='#'>about us</a></li>
                    <li className='main_nav_item'><a href='courses.html'>courses</a></li>
                    <li className='main_nav_item'><a href='elements.html'>elements</a></li>
                    <li className='main_nav_item'><a href='news.html'>news</a></li>
                    <li className='main_nav_item'><a href='contact.html'>contact</a></li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className='header_side d-flex flex-row justify-content-center align-items-center'>
              <img src={phone} alt='' />
                <span>+43 4566 7788 2457</span>
            </div>

            <div className='hamburger_container'>
              <i className='fas fa-bars trans_200' />
            </div>

          </header>


          <div className="menu_container menu_mm">

            <div className="menu_close_container">
              <div className="menu_close"></div>
            </div>


            <div className="menu_inner menu_mm">
              <div className="menu menu_mm">
                <ul className="menu_list menu_mm">
                  <li className="menu_item menu_mm"><a href="#">Home</a></li>
                  <li className="menu_item menu_mm"><a href="#">About us</a></li>
                  <li className="menu_item menu_mm"><a href="courses.html">Courses</a></li>
                  <li className="menu_item menu_mm"><a href="elements.html">Elements</a></li>
                  <li className="menu_item menu_mm"><a href="news.html">News</a></li>
                  <li className="menu_item menu_mm"><a href="contact.html">Contact</a></li>
                </ul>



                <div className="menu_social_container menu_mm">
                  <ul className="menu_social menu_mm">
                    <li className="menu_social_item menu_mm"><a href="#"><i className="fab fa-pinterest"></i></a></li>
                    <li className="menu_social_item menu_mm"><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                    <li className="menu_social_item menu_mm"><a href="#"><i className="fab fa-instagram"></i></a></li>
                    <li className="menu_social_item menu_mm"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li className="menu_social_item menu_mm"><a href="#"><i className="fab fa-twitter"></i></a></li>
                  </ul>
                </div>

                <div className="menu_copyright menu_mm">Colorlib All rights reserved</div>
              </div>

            </div>

          </div>
        </Fragment>

    )
  }
}
export default Navbar
