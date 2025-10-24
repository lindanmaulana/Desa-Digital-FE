import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { AuthContextProvider } from './libs/context/AuthContextProvider.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<AuthContextProvider>
			<App />
		</AuthContextProvider>
	</StrictMode>
);
