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
import { MoreHorizontal } from "lucide-react";

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
    header: ({ column }) => <DataTableColumnHeader column={column} />,
    cell: ({ row }) =>
      intlDTF.format(new Date(row.getValue("dateOfBirth").slice(0, 10))),
  },
  {
    title: "Start Date",
    accessorKey: "startDate",
    header: ({ column }) => <DataTableColumnHeader column={column} />,
    cell: ({ row }) =>
      intlDTF.format(new Date(row.getValue("startDate").slice(0, 10))),
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
    header: ({ column }) => <DataTableColumnHeader column={column} />,
    filterFn: (row, id, value) => value.includes(row.getValue(id)),
  },
  {
    title: "Zip code",
    accessorKey: "zipCode",
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
    cell: ({ row }) => {
      const fullName =
        row.getValue("firstName") + " " + row.getValue("lastName");
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>{fullName}</DropdownMenuLabel>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Delete</DropdownMenuItem>
            <DropdownMenuItem>View info</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

function EmployeeList() {
  const employees = useEmployeesSelector();

  return <DataTable columns={columns} data={employees} />;
}

EmployeeList.propTypes = {};

export default EmployeeList;
