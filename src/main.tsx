import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/tailwind.css';
import initSmoothScroll from './utils/smoothScroll';

const container = document.getElementById('root');
if (container) {
	const root = createRoot(container);
	root.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>
	);
}

// Initialize offset-aware smooth scrolling for in-page links.
// This returns a teardown function but we don't need it here.
if (typeof window !== 'undefined') {
  try {
    initSmoothScroll({ headerSelector: '.site-header', offset: 8 });
  } catch (err) {
    // non-blocking if something goes wrong
    // console.warn('smoothScroll init failed', err);
  }
}
