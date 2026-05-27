import React from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/tailwind.css';
import initSmoothScroll from './utils/smoothScroll';

const container = document.getElementById('root')!;

const appTree = (
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);

// Hydrate pre-rendered HTML (production SSG), or do a fresh render (dev).
if (container.innerHTML.trim()) {
	hydrateRoot(container, appTree);
} else {
	createRoot(container).render(appTree);
}

if (typeof window !== 'undefined') {
  try {
    initSmoothScroll({ headerSelector: '.site-header', offset: 8 });
  } catch (err) {
    // non-blocking
  }
}
