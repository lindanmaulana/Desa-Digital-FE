import { BrowserRouter, Route, Routes } from 'react-router';
import AuthLayout from './app/auth/layout';
import SigninAuthPage from './app/auth/signin';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import VerifyOtpAuthPage from './app/auth/verify-otp';
import ForgotPasswordAuthPage from './app/auth/forgot-password';
import { GuestRoute } from './routes/GuestRoute';
import { AuthRoute } from './routes/AuthRoute';
import { VerifyAccountAuthRoute } from './routes/VerifyAccountAuthRoute';
import { StepGuardAuthRoute } from './routes/StepGuardAuthRoute';
import MatchOtpAuthPage from './app/auth/match-otp';
import { useAuth } from './libs/context/useAuth';
import ResetPasswordAuthPage from './app/auth/reset-password';

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

	const {emailSubmitted, otpVerified} = useAuth()

	return (
		<QueryClientProvider client={client}>
			<BrowserRouter>
				<Routes>
					<Route index element={<GuestRoute />} />

					<Route element={<AuthRoute />}>
						<Route path="/auth/*" element={<AuthLayout />}>
							<Route path="signin" element={<SigninAuthPage />} />

							<Route element={<VerifyAccountAuthRoute />}>
								<Route path="verify-otp?" element={<VerifyOtpAuthPage />} />
							</Route>

							<Route path="forgot-password" element={<ForgotPasswordAuthPage />} />

							<Route element={<StepGuardAuthRoute requiredCondition={emailSubmitted} redirectPath="/auth/signin" />}>
								<Route path='match-otp' element={<MatchOtpAuthPage />} />
							</Route>

							<Route element={<StepGuardAuthRoute requiredCondition={otpVerified} redirectPath='/auth/match-otp' />}>
								<Route path='reset-password' element={<ResetPasswordAuthPage />} />
							</Route>
						</Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</QueryClientProvider>
	);
}

export default App;
