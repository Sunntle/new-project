"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";

const TemplateRoot = ({ children }: { children: React.ReactNode }) => {
  const route = usePathname();
  const isHomePage = useMemo(() => {
    return route == "/" || route == "/home";
  }, [route]);
  return (
    <>
      <Header isHomePage={isHomePage} />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default TemplateRoot;
