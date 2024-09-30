import React, { ReactNode } from "react";

type Props = {
  children: React.ReactNode;
  header: ReactNode;
};

function BaseLayout({ children, header }: Props) {
  return (
    <main className="min-h-screen w-screen max-w-full bg-gray-100">
      <div className="max-w-screen-2xl m-auto bg-white">
        <div className="fixed left-0 top-0 z-10 w-full bg-brandBgColor">
          {header}
        </div>
        <div className="mt-[170px] md:mt-[130px]">{children}</div>
      </div>
      <div>footer</div>
    </main>
  );
}

export default BaseLayout;
