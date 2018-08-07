import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Content from '../Content'

import '../../images/slider_background.jpg'
class App extends React.Component {
  constructor(props) {
    super(props)
    // event

  }
  render() {
    return (
      <Fragment>
        <Navbar />
        <Content />
        <Footer />

      </Fragment>
    )
  }
}
export default App
