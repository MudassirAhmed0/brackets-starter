import React, { ReactNode } from "react";
import Header from "./Header";
import { useTranslations } from "next-intl";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const t = useTranslations("LayoutPage");
  return (
    <>
      <Header logoText={t("logo")} />
      {children}
    </>
  );
};

export default Layout;
