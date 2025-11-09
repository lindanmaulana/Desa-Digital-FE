import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import ForgotPasswordAuthPage from './app/auth/forgot-password';
import ForgotPasswordLayout from './app/auth/forgot-password/layout';
import ResetPasswordAuthPage from './app/auth/forgot-password/reset-password';
import VerifyhOtpAuthPage from './app/auth/forgot-password/verify-otp';
import { VerifyOtpSuccessPage } from './app/auth/forgot-password/verify-otp/success';
import AuthLayout from './app/auth/layout';
import { RequestNewLinkAuthPage } from './app/auth/verify-account/request-new-link';
import { RequestNewLinkSuccessPage } from './app/auth/verify-account/request-new-link/success';
import SigninAuthPage from './app/auth/signin';
import VerifyAccountAuthPage from './app/auth/verify-account';
import DashboardPage from './app/dashboard';
import DashboardLayout from './app/dashboard/layout';
import { Toaster } from './components/ui/sonner';
import { DashboardGuard } from './guard/DashboardGuard';
import { AuthGuard, GuestGuard, StepAuthGuard } from './guard/index';
import { TokenGuard } from './guard/TokenGuard';
import { useGuardAuth } from './hooks/useGuardAuth';
import VerifyAccountAuthLayout from './app/auth/verify-account/layout';
import HeadOfFamilyPage from './app/dashboard/head-of-family';

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

	const { isEmailSubmit } = useGuardAuth();

	return (
		<QueryClientProvider client={client}>
			<BrowserRouter>
				<Routes>
					<Route index element={<GuestGuard />} />

					<Route element={<AuthGuard />}>
						<Route path="/auth/*" element={<AuthLayout />}>
							<Route path="signin" element={<SigninAuthPage />} />

							<Route path="verify-account/*" element={<VerifyAccountAuthLayout />}>
								<Route element={<TokenGuard />}>
									<Route path="?" element={<VerifyAccountAuthPage />} />
								</Route>
								<Route path="request-new-link" element={<RequestNewLinkAuthPage />} />
								<Route path="request-new-link/success" element={<RequestNewLinkSuccessPage />} />
							</Route>

							<Route path="forgot-password/*" element={<ForgotPasswordLayout />}>
								<Route index element={<ForgotPasswordAuthPage />} />
								<Route element={<StepAuthGuard requiredCondition={isEmailSubmit} redirectPath="/auth/signin" />}>
									<Route path="verify-otp" element={<VerifyhOtpAuthPage />} />
									<Route path="verify-otp/success" element={<VerifyOtpSuccessPage />} />
								</Route>
								<Route element={<TokenGuard />}>
									<Route path="reset?" element={<ResetPasswordAuthPage />} />
								</Route>
							</Route>
						</Route>
					</Route>

					<Route element={<DashboardGuard />}>
						<Route path="/dashboard/*" element={<DashboardLayout />}>
							<Route index element={<DashboardPage />} />
							<Route path='head-of-family' element={<HeadOfFamilyPage />} />
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
