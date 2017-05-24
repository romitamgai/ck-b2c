import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Sidebar from './Layout/Sidebar';
import Offsidebar from './Layout/Offsidebar';

class App extends Component {
  render() {
    // Animations supported
    //      'rag-fadeIn'
    //      'rag-fadeInUp'
    //      'rag-fadeInDown'
    //      'rag-fadeInRight'
    //      'rag-fadeInLeft'
    //      'rag-fadeInUpBig'
    //      'rag-fadeInDownBig'
    //      'rag-fadeInRightBig'
    //      'rag-fadeInLeftBig'
    //      'rag-zoomBackDown'

    const animationName = 'rag-fadeIn';

    return (
      <div className="wrapper">
        <Header />

        <Sidebar />

        <Offsidebar />

        <CSSTransitionGroup
          component="section"
          transitionName={animationName}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {this.props.children}
        </CSSTransitionGroup>

        <Footer />
      </div>
    );
  }
}

export default App;
