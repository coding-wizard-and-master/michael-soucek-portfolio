import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Home from './pages/index';

const App: React.FC = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
			<Analytics />
		</>
	);
};

export default App;
