import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'


class Navbar extends React.Component {
  render() {
    return (
        <Fragment>
          <header className='header d-flex flex-row'>
            <div className='header_content d-flex flex-row align-items-center'>


              <div className='logo_container'>
                <div className='logo'>
                  <img src='/images/logo.png' alt='' />
                    <span>GSTT</span>
                </div>
              </div>


              <nav className='main_nav_container'>
                <div className='main_nav'>
                  <ul className='main_nav_list'>
                    <li className='main_nav_item'><a href='#'>trang chủ</a></li>
                    <li className='main_nav_item'><a href='#'>liên hệ</a></li>
                    <li className='main_nav_item'><a href=''>gia sư</a></li>
                    <li className='main_nav_item'><a href=''>phụ huynh và học sinh</a></li>
                    <li className='main_nav_item'><a href=''>Tin tức</a></li>
                    <li className='main_nav_item'><a href=''>Liên hệ</a></li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className='header_side d-flex flex-row justify-content-center align-items-center'>
              <img src='/images/phone-call.svg' alt='' />
                <span>+43 4566 7788 2457</span>
            </div>

            <div className='hamburger_container'>
              <i className='fas fa-bars trans_200' />
            </div>

          </header>


          <div className="menu_container menu_mm">

            <div className="menu_close_container">
              <div className="menu_close" />
            </div>


            <div className="menu_inner menu_mm">
              <div className="menu menu_mm">
                <ul className="menu_list menu_mm">
                  <li className="menu_item menu_mm"><a href="">Trang chủ</a></li>
                  <li className="menu_item menu_mm"><a href="">Liên hệ</a></li>
                  <li className="menu_item menu_mm"><a href="">Gia sư</a></li>
                  <li className="menu_item menu_mm"><a href="">Phụ huynh và học sinh</a></li>
                  <li className="menu_item menu_mm"><a href="">Tin tức</a></li>
                  <li className="menu_item menu_mm"><a href="">Liên hệ</a></li>
                </ul>



                <div className="menu_social_container menu_mm">
                  <ul className="menu_social menu_mm">
                    <li className="menu_social_item menu_mm"><a href="#"><i className="fab fa-pinterest" /></a></li>
                    <li className="menu_social_item menu_mm"><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                    <li className="menu_social_item menu_mm"><a href="#"><i className="fab fa-instagram" /></a></li>
                    <li className="menu_social_item menu_mm"><a href="#"><i className="fab fa-facebook-f" /></a></li>
                    <li className="menu_social_item menu_mm"><a href="#"><i className="fab fa-twitter" /></a></li>
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
