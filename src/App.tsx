import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import GuestRoute from './routes/GuestRoute';
import AuthRoute from './routes/AuthRoute';
import AuthLayout from './app/auth/layout';
import SigninAuthPage from './app/auth/signin';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import VerifyOtpAuthPage from './app/auth/verify-otp';

function App() {
	const [client] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						refetchOnWindowFocus: false,
					},
				},
			})
	);
	return (
		<QueryClientProvider client={client}>
			<BrowserRouter>
				<Routes>
					<Route index element={<GuestRoute />} />

					<Route element={<AuthRoute />}>
						<Route path="/auth/*" element={<AuthLayout />}>
							<Route path="signin" element={<SigninAuthPage />} />
							<Route path='verify-otp' element={<VerifyOtpAuthPage />} />
						</Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</QueryClientProvider>
	);
}

export default App;
