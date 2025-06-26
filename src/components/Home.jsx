import React from "react";
import { FaLinkedin } from "react-icons/fa";

function Home() {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center p-6"
      style={{
  backgroundImage: `linear-gradient(to bottom right, rgba(239, 246, 255, 0.8), rgba(219, 234, 254, 0.8)), url(${process.env.PUBLIC_URL + "/bg-home.jpeg"})`
}}
    >
      <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10 text-center md:text-left">
        {/* 👤 Profile Image */}
        <img src={process.env.PUBLIC_URL + "/Sam_IISc.jpeg"} 
          alt="Sam Sundar Singh"
          className="w-40 h-40 md:w-48 md:h-48 rounded-full shadow-lg object-cover"
        />

        {/* ✍️ Text Content */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900">
            Hi, I'm <span className="text-blue-600">Sam Sundar Singh</span> 👋
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-800">
            PhD Research Scholar – IISc Bangalore
          </h2>
          <p className="text-md md:text-lg text-gray-600 max-w-xl">
            I specialise in Irrigation Economics, Agricultural Water Valuation, and Geospatial Analytics for Public Policy.
          </p>

          {/* 🔗 LinkedIn */}
          <div className="pt-2">
            <a
              href="https://www.linkedin.com/in/sam-sundar-singh-e/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-blue-700 hover:text-blue-900 text-3xl"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;