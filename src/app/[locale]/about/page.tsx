import Layout from "@/components/layout/Layout";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import React from "react";

const AboutPage = () => {
  const t = useTranslations("AboutPage");
  return (
    <Layout>
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-[32px] row-start-2 items-center justify-center sm:items-start">
          <h1 className="text-5xl">{t("title")}</h1>
          <Link href={"/"} className="text-center block mx-auto ">
            {t("link")}
          </Link>
        </main>
      </div>
    </Layout>
  );
};

export default AboutPage;
