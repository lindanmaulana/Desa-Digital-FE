import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import ForgotPasswordAuthPage from './app/auth/forgot-password';
import AuthLayout from './app/auth/layout';
import MatchOtpAuthPage from './app/auth/match-otp';
import ResetPasswordAuthPage from './app/auth/reset-password';
import SigninAuthPage from './app/auth/signin';
import VerifyAccountAuthPage from './app/auth/verify-account';
import DashboardPage from './app/dashboard';
import DashboardLayout from './app/dashboard/layout';
import { Toaster } from './components/ui/sonner';
import { DashboardGuard } from './guard/DashboardGuard';
import { AuthGuard, GuestGuard, StepAuthGuard, VerifyAccountAuthGuard } from './guard/index';
import { useGuardAuth } from './hooks/useGuardAuth';
import { RequestNewLinkAuthPage } from './app/auth/request-new-link';
import { RequestNewLinkSuccessPage } from './app/auth/request-new-link/success';

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

	const { isEmailSubmit, isOtpVerified } = useGuardAuth();

	return (
		<QueryClientProvider client={client}>
			<BrowserRouter>
				<Routes>
					<Route index element={<GuestGuard />} />

					<Route element={<AuthGuard />}>
						<Route path="/auth/*" element={<AuthLayout />}>
							<Route path="signin" element={<SigninAuthPage />} />

							<Route path="request-new-link" element={<RequestNewLinkAuthPage />} />
							<Route path="request-new-link/success" element={<RequestNewLinkSuccessPage />} />

							<Route element={<VerifyAccountAuthGuard />}>
								<Route path="verify-account?" element={<VerifyAccountAuthPage />} />
							</Route>

							<Route path="forgot-password" element={<ForgotPasswordAuthPage />} />

							<Route element={<StepAuthGuard requiredCondition={isEmailSubmit} redirectPath="/auth/signin" />}>
								<Route path="verify-otp" element={<MatchOtpAuthPage />} />
							</Route>

							<Route element={<StepAuthGuard requiredCondition={isOtpVerified} redirectPath="/auth/match-otp" />}>
								<Route path="reset-password" element={<ResetPasswordAuthPage />} />
							</Route>
						</Route>
					</Route>

					<Route element={<DashboardGuard />}>
						<Route path="/dashboard/*" element={<DashboardLayout />}>
							<Route index element={<DashboardPage />} />
						</Route>
					</Route>
				</Routes>
			</BrowserRouter>

			<Toaster position="top-center" richColors />
			{import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
		</QueryClientProvider>
	);
}

export default App;
