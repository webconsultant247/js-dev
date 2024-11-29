import Image from "next/image";
import React, { ReactNode } from "react";

import SocialAuthForm from "@/components/forms/SocialAuthForm";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-auth-light bg-cover bg-center bg-no-repeat px-4 py-10 dark:bg-auth-dark">
      <section className="light-border background-light-800_dark-200 shadow-light-100_dark-100 rounded-[10px] border px-4 py-10 shadow-md sm:min-w-[520px] sm:px-8">
        <div className="flex items-center justify-between gap-2">
          <div className="space-y-2.5">
            <h1 className="h2-bold text-dark-100_light-900">Join DevFlow</h1>
            <p className="paragraph-regular text-dark-500_light-400">
              To get your questions answered
            </p>
          </div>
          <Image
            src="images/site-logo.svg"
            width={50}
            height={50}
            alt="DevFlow Logo"
            className="object-contain"
          />
        </div>
        {children}

        <SocialAuthForm />
      </section>
    </main>
  );
};

export default AuthLayout;
