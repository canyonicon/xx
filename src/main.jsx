import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider} from "react-router-dom";

// Importing the Bootstrap CSS

import 'bootstrap-icons/font/bootstrap-icons.css';

// Importing the custom CSS



// import routes
import routes from "./routes/routes";

// import plugins
import toast, { Toaster } from 'react-hot-toast'
import { ModalProvider } from './providers/ModalProvider';

import i18n from "i18next";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./translations/en.json";
import translationAR from "./translations/ar.json";
import axios from 'axios';

const resources = {
  en: {
    translation: translationEN,
  },
  ar: {
    translation: translationAR,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("language") || "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: true,
  },
});

if (i18next.language === "ar" || localStorage.getItem('language') === null) {
	// import bootstrap/dist/css/bootstrap.rtl.min.css when its done, then import styles.css and then styles.rtl.css
	import("bootstrap/dist/css/bootstrap.rtl.min.css").then(() => {
		import("./styles.css");
		import("./styles.rtl.css");
		import("./responsive.css");
	});
	
}else{
	import("bootstrap/dist/css/bootstrap.min.css").then(() => {
		import("./styles.css");
		import("./responsive.css");
	});
}

// axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept-Language'] = i18next.language;
axios.defaults.headers.common['api_password'] = '$amuR@!98L12';

if (localStorage.getItem('token')) {
	axios.defaults.headers.common['Authorization'] = "Bearer "+localStorage.getItem('token');
}


ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		
		<I18nextProvider i18n={i18next}>
			<ModalProvider>
				<RouterProvider router={routes} />
			</ModalProvider>
			<Toaster position='top-right' />
		</I18nextProvider>
	
	</React.StrictMode>
);