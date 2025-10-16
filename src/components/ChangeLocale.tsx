"use client";
import { Link } from "@/i18n/navigation";
import { usePathname } from "next/navigation";
import React from "react";

const ChangeLocale = () => {
  const pathname = usePathname();
  const isAr = pathname?.includes("/ar/") || pathname == "/ar";
  const newUrl = isAr ? pathname.split("/ar")[1] || "/" : pathname;

  return (
    <Link href={newUrl} locale={isAr ? "en" : "ar"} className="">
      {isAr ? "En" : "Ar"}
    </Link>
  );
};

export default ChangeLocale;
