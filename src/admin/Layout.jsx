import React from 'react';
import Menu from './components/menu/Menu';
import TopMenu from './components/menu/TopMenu';
// styles
import './Admin.css';

//plugins
import axios from 'axios';
import i18next from "i18next";

const Layout = ({ children }) => {

	// dark mode
	if (localStorage.getItem('darkMode') === 'true') {
		const html = document.querySelector('html');
		html.setAttribute('data-bs-theme', 'dark');
	}

	// check if token exists in local storage then add it to axios headers else remove it and redirect to login
	if (localStorage.getItem('token') == null) {
		window.location.href = '/login';
		
	}
	// else{
	// 	alert('token exists '+axios.defaults.headers.post['api_password'])
	// }
	


	return (
		<div className='admin-layout bg-body-tertiary container-fluid clearfix' style={{height: "100vh"}}>
			<div className="row">
				<div className="col-md-2 bg-body-tertiary border-end admin-sidebar-container">
					<Menu />
				</div>
				<div className="col-md-10 bg-body-tertiary h-100">
					<TopMenu />
					<div className="py-4">
						{children}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Layout;
