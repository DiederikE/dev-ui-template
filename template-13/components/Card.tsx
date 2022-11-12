/* eslint-disable @next/next/no-img-element */
import React from "react";
interface Props {
  rev: string;
  image: string;
  datah1: string;
  datap: string;
  databtnhref: string;
  datasmall: string;
}

export default function Card({ rev, image, datah1, datap, databtnhref, datasmall }: Props) {
  return (
    <div
      className={`${rev} flex items-end  my-3 max-w-5xl flex-wrap md:flex-nowrap px-4`}
    >
      <div>
        <img
          src={image}
          alt="placeholder.png"
          width="500"
          height="500"
          className="w-full"
          style={{
            borderRadius: 20
          }}
        />
      </div>
      <div className="mx-3 max-w-xl md:max-w-sm lg:max-w-xl">
        <p className="uppercase">{datasmall}</p>
        <h1 className="font-WorkSansSemiBold text-2xl md:text-xl lg:text-2xl ">
          {datah1}
        </h1>
          <p className="">
            {datap}
          </p>
        <button onClick={ () => window.open(databtnhref, "_blank") } className="hover:bg-[#BC3CD8] px-6 py-2 border rounded-full ">
          View work
        </button>
      </div>
    </div>
  );
}
