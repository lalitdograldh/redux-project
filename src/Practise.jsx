import React from "react";

const Practise = () => {
  const students = [];
  return (
    <>
      <p>{students.length && "No Students Found "}</p>
      <p>Number Of Student:{students.length}</p>
    </>
  );
};

export default Practise;
