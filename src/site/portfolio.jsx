import React from "react";
import { Body } from "../container";
import { Header, Footer } from "../component";
import "../component/style.css";
import { useOGTags } from "../custom_hooks/";

export default function Portfolio() {
  useOGTags({
    title: "Portfolio",
    description: "Portfolio",
    image: "https://i.imgur.com/G0d0i3v.png",
  });
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}
