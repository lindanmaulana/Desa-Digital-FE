import { Image } from "@heroui/react";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <main className="flex min-h-screen">
      <Outlet />
      <section className="relative flex w-full max-w-[634px]">
        <div className="fixed top-0 h-screen w-full max-w-[634px] overflow-hidden pr-3 py-3 ">
          <div className="h-full w-[622px] flex items-center justify-center bg-gradient-to-bl from-[#89b854] to-[#042f2b] pt-[59px] pb-[60px] rounded-3xl ">
            <Image
              alt="bg-signin"
              src="/images/backgrounds/bg-signin.png"
              className="h-full w-[542px] object-contain mx-auto"
            />
          </div>
        </div>
      </section>

      {/* <section className="relative flex w-full max-w-[634px]">
        <div className="fixed top-0 h-screen w-full max-w-[634px] overflow-hidden pr-3 py-3">
          <div className="h-full w-[622px] rounded-3xl bg-gradient-to-bl from-[#89b854] to-[#042f2b] pt-[59px] pb-[60px]">
            <img
              src="/images/backgrounds/bg-signin.png"
              className="h-full w-[542px] object-contain mx-auto"
              alt="banner"
            />
          </div>
        </div>
      </section> */}
      {/* <section className="h-full w-full max-w-[634px] flex items-center justify-center">
        <div className="h-[98%] max-w-[634px] bg-gradient-to-bl from-[#89b854] to-[#042f2b] rounded-3xl">
          <div className="h-full w-[622px] flex items-center justify-center ">
            <Image
              alt="bg-signin"
              src="/images/backgrounds/bg-signin.png"
              className="w-full h-[602px] object-contain mx-auto"
            />
          </div>
        </div>
      </section> */}
    </main>
  );
};

export default AuthLayout;
