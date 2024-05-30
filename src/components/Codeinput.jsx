import React from "react";
import {Textarea} from "@nextui-org/react";

export default function Codeinput() {
  return (
    // <textarea placeholder="Enter your source code" rows="10" cols="33" className="bg-[rgb(30,41,59)] text-white p-2 hover:border outline-none">
    // </textarea>
    <Textarea minRows={10} maxRows={20} placeholder="Enter your source code" className="text-white bg-[rgb(30,41,59)] p-2 m-2 focus:border outline-none"/>

  );
}
