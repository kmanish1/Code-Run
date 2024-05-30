import React from "react";
import {Select, SelectItem} from "@nextui-org/react";

export default function Language() {
  return (
    <div className="">
      <Select 
        // label="Select a language"
        placeholder="Select a language" 
        className=" text-white bg-[rgb(30,41,59)] p-2 m-2" 
      >
        <SelectItem className="text-white bg-pink-500 rounded">C</SelectItem>
        <SelectItem className="text-white bg-pink-500 rounded">C++</SelectItem>
        <SelectItem className="text-white bg-pink-500 rounded">Python</SelectItem>
        <SelectItem className="text-white bg-pink-500 rounded">JavaScript</SelectItem>
        <SelectItem className="text-white bg-pink-500 rounded">Java</SelectItem>
      </Select>
    </div>
  );
}
