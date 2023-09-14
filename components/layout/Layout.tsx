import React, { type ReactNode } from "react";
import CustHeader from "./CustHeader";
import CustFooter from "./CustFooter";

type LayoutProps = {
  children: ReactNode;
};

function Layout(props: LayoutProps) {
  return (
    <>
      <CustHeader />
      <main className="flex flex-col items-center justify-center m-5">{props.children}</main>
      <CustFooter />
    </>
  );
}

export default Layout;
