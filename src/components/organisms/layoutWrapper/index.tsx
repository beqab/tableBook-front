import React from "react";
import BaseLayout from "../baseLayout";

type Props = {
  children: React.ReactNode;
};

const LayoutWrapper = ({ children }: Props) => {
  return (
    <>
      <BaseLayout>{children}</BaseLayout>
    </>
  );
};

export default LayoutWrapper;
