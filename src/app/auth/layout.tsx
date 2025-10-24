import { Outlet } from 'react-router';

const AuthLayout = () => {
	return (
		<main className="flex h-screen">
			<Outlet />
			<section className="relative flex w-full max-w-[634px]">
				<div className="fixed top-0 h-screen w-full max-w-[634px] overflow-hidden pr-3 py-3">
					<div className="h-full w-[622px] flex items-center justify-center bg-gradient-to-bl from-[#89b854] to-[#042f2b] rounded-3xl ">
						<img alt="bg-signin" src="/images/backgrounds/bg-signin.png" className="h-full w-[542px] object-contain mx-auto p-8" />
					</div>
				</div>
			</section>
		</main>
	);
};

export default AuthLayout;
