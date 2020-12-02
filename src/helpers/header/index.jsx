import React from 'react';
import Navigation from './navigation'
import './index.scss';

function Header() {

  const navLinks = [
		{
			text: 'Home',
			path: '/home',
		},
		{
			text: 'Menü',
			path: '/menu',
		},
		{
			text: 'Bestellen',
			path: '/bestellen',
		},
		// {
		// 	text: 'Catering',
		// 	path: '/catering',
		// },
		{
			text: 'Impressum',
			path: '/impressum',
		}
  ]
  
  return (
    <header className="main-header">
      <div className="main-header__wrapper">
      <div className="main-header__text">
        <div className="main-header__text-wrapper text-left">
          <p>Asiatische Küche in </p>
          <p className="text-highlighted">ADLERSHOF</p>
        </div>
        <div className="main-header__text-wrapper text-right">
          <p>Jetzt bestellen </p>
          <p className="text-highlighted">030 40745645</p>
        </div>
      </div>
      <div className="main-header__logo">
        <a className="main-header__logo-url" href="/home">
          <img 
            className="logo" 
            src="/assets/images/logo/logo-white.png" 
            alt="asia-sushi-bar-logo"
          />
        </a>
      </div>

      <Navigation
				navLinks={ navLinks }
				background="#fff"
				hoverBackground="#ddd"
				linkColor="#777"
			/>
      </div>
    </header>
  );
};
  
export default Header;