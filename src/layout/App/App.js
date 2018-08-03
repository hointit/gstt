import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Content from '../Content'


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
