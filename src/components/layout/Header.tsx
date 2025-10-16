import React from "react";
import ChangeLocale from "../ChangeLocale";

interface Props {
  logoText: string;
}

const Header = ({ logoText }: Props) => {
  return (
    <header className="py-10 w-[90%] mx-auto flex justify-between">
      <span>{logoText}</span>
      <ChangeLocale />
    </header>
  );
};

export default Header;
