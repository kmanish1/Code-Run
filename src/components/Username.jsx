import React from "react";
import {Input} from "@nextui-org/react";

export default function Username() {
  return (
    <Input
      isClearable
      type="text"
      variant="bordered"
      placeholder="Enter your username"
    //   defaultValue="junior@nextui.org"
      onClear={() => console.log("input cleared")}
      className=" text-white bg-[rgb(30,41,59)] p-2 m-2"
    />
  );
}
