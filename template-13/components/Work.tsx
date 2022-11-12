import React from "react";
import Card from "./Card";

export default function Work() {
  const data = [
    { flex: "flex-row-reverse", image: "/smartfactoryposter.png", datasmall: "Azure, .NET, Java, React", datah1: "Mobile Web & IoT Project ", datap: "During my internship in delaware I had the opportunity to work on a project within the Mobile Web & IoT team. During this project I developed software around a miniature Industry 4.0 factory.", databtnhref: "https://www.delaware.pro/en-be/blogs/industry-4-0-discrete-manufacturing?utm_source=linkedin&utm_medium=socialseeder&utm_campaign=industry-40-discrete-manufacturing" },
    { flex: "", image: "/bandmanagerposter.png", datasmall: ".NET Blazor", datah1: "Bandmanager ", datap: "During my student days I worked for Codewolf for a while. One of the projects I have mainly worked on is Bandmanager.", databtnhref: "https://www.bandmanager.be/" },
  ];
  return (
    <div id="work" className="min-h-screen px-4">
      <h1 className="uppercase text-start text-3xl py-5 font-WorkSansSemiBold text-gray-500">
        Selected <span className="text-white">Works</span>
      </h1>
      <div className=" flex flex-col  items-center  w-full ">
        {data.map((n, index) => {
          return <Card key={index} rev={n.flex} image={n.image} datah1={n.datah1} datap={n.datap} databtnhref={n.databtnhref} datasmall={n.datasmall} />;
        })}
      </div>
    </div>
  );
}
