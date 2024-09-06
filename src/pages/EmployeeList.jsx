import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEmployeesSelector } from "../redux/selectors";

import DataTableColumnHeader from "@/components/DataTable/DataTableColumnHeader";
import DataTablePagination from "@/components/DataTable/DataTablePagination";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
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

  const table = useReactTable({
    data: employees,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <DataTablePagination table={table} />
    </div>
  );
}

EmployeeList.propTypes = {};

export default EmployeeList;
