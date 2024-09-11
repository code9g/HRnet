import { useEmployeesSelector } from "../redux/selectors";

import DataTable from "@/components/DataTable/DataTable";
import DataTableColumnHeader from "@/components/DataTable/DataTableColumnHeader";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DeleteIcon, EditIcon, MoreHorizontal, ViewIcon } from "lucide-react";

const intlDTF = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

const columns = [
  {
    title: "First Name",
    accessorKey: "firstName",
    header: ({ column }) => <DataTableColumnHeader column={column} />,
    filterFn: (row, id, value) => {
      value = value.toLowerCase();
      return (
        row.getValue("firstName").toLowerCase().includes(value) ||
        row.getValue("lastName").toLowerCase().includes(value) ||
        row.getValue("street").toLowerCase().includes(value) ||
        row.getValue("city").toLowerCase().includes(value)
      );
    },
  },
  {
    title: "Last Name",
    accessorKey: "lastName",
    header: ({ column }) => <DataTableColumnHeader column={column} />,
  },
  {
    title: "Date of Birth",
    accessorKey: "dateOfBirth",
    className: { header: "justify-center", cell: "text-center" },
    header: ({ column }) => <DataTableColumnHeader column={column} />,
    cell: ({ row, column }) =>
      intlDTF.format(new Date(row.getValue(column.columnDef.accessorKey))),
  },
  {
    title: "Start Date",
    accessorKey: "startDate",
    className: { header: "justify-center", cell: "text-center" },
    header: ({ column }) => <DataTableColumnHeader column={column} />,
    cell: ({ row, column }) =>
      intlDTF.format(new Date(row.getValue(column.columnDef.accessorKey))),
  },
  {
    title: "Street",
    accessorKey: "street",
    header: ({ column }) => <DataTableColumnHeader column={column} />,
  },
  {
    title: "City",
    accessorKey: "city",
    header: ({ column }) => <DataTableColumnHeader column={column} />,
  },
  {
    title: "State",
    accessorKey: "state",
    className: { header: "justify-center", cell: "text-center" },
    header: ({ column }) => <DataTableColumnHeader column={column} />,
    filterFn: (row, id, value) => value.includes(row.getValue(id)),
  },
  {
    title: "Zip code",
    accessorKey: "zipCode",
    className: { header: "justify-center", cell: "text-center" },
    header: ({ column }) => <DataTableColumnHeader column={column} />,
  },
  {
    title: "Department",
    accessorKey: "department",
    header: ({ column }) => <DataTableColumnHeader column={column} />,
    filterFn: (row, id, value) => value.includes(row.getValue(id)),
  },
  {
    id: "actions",
    header: "Actions",
    className: { header: "text-center", cell: "text-center" },
    cell: ({ row }) => {
      const fullName =
        row.getValue("firstName") + " " + row.getValue("lastName");
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open action menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>{fullName}</DropdownMenuLabel>
            <DropdownMenuItem disabled className="flex gap-2">
              <EditIcon />
              Edit
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem disabled className="flex gap-2">
              <DeleteIcon />
              Delete
            </DropdownMenuItem>
            <DropdownMenuItem disabled className="flex gap-2">
              <ViewIcon />
              View info
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

function EmployeeList() {
  const employees = useEmployeesSelector();

  return (
    <>
      <h2 className="text-3xl text-center font-bold mb-4 p-4">Employee List</h2>
      <DataTable columns={columns} data={employees} />;
    </>
  );
}

EmployeeList.propTypes = {};

export default EmployeeList;
