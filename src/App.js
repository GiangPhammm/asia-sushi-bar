import React from 'react';
import { Router } from '@reach/router'
import Header from './helpers/header/index'
import Home from './pages/home'
import Menu from './pages/menu'
import Order from './pages/bestellen'
// import Catering from './pages/catering'
import Contact from './pages/impressum'
import Policy from './pages/dsgvo'
import Footer from './helpers/footer/index'
// import ScrollToTop from './helpers/scrolltotop'

import './App.scss'

function App() {
	return (
		<div className="App">
			<Header></Header>

			<main className="main-content">
				<Router>
          {["/", "/home"].map((path, index) => 
            <Home path={path} key={index} />
          )}
          <Menu path="/menu" />
          <Order path="/bestellen" />
          <Contact path="/impressum" />
          <Policy path="/dsgvo" />
				</Router>
			</main>
			<Footer></Footer>
		</div>
	);
}
export default App;
