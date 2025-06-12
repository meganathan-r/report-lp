import React from "react";

function HeaderSection({ title, description }) {
  return (
    <div className="text-center mb-14">
      <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">{title}</h2>
      <p className="para-text max-w-2xl mx-auto">{description}</p>
    </div>
  );
}

export default HeaderSection;
