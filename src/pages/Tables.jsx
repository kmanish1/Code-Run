import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";
import { NavbarEntries } from "../components/NavbarEntries";
const rows = [
  {
    key: "1",
    name: "Tony Reichert",
    role: "CEO",
    status: "Active",
    stdin:"int x=5",
    time:"22:13 02-11-2024"
  },
  {
    key: "2",
    name: "Zoey Lang",
    role: "Technical Lead",
    status: "Paused",
  },
  {
    key: "3",
    name: "Jane Fisher",
    role: "Senior Developer",
    status: "Active",
  },
  {
    key: "4",
    name: "William Howard",
    role: "Community Manager",
    status: "Vacation",
  },
];

const columns = [
  {
    key: "name",
    label: "Username",
  },
  {
    key: "role",
    label: "Code",
  },
  {
    key: "status",
    label: "Code Language",
  },
  {
    key:"stdin",
    label:"Standard Input"
  },
  {
    key:"time",
    label:"Created At"
  }
];

export default function Tables() {
  return (
    <div>
      <NavbarEntries></NavbarEntries>
      <Table aria-label="Example table with dynamic content" className="text-white text-start my-10">
        <TableHeader columns={columns}>
          {(column) => <TableColumn key={column.key} className='text-xl'>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
            <TableRow key={item.key} >
              {(columnKey) => <TableCell className="border">{getKeyValue(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
