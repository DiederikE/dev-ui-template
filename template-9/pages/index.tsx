/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import * as React from "react";
import Hero from "../components/Hero";
import NavComponent from "../components/NavComponent";
export default function Home() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <div className="absolute inset-[50%]">
        <div className="bg-[#73E0A9] w-[849px] h-[825px] filter blur-[509px]"></div>
        <div className="bg-[#5B68DF] w-[999px] h-[971px] filter blur-[509px]"></div>
      </div>
      <NavComponent />
      <Hero />
    </div>
  );
}
