import {
  useDepartmentsSelector,
  useEmployeesSelector,
  useStatesSelector,
} from "../redux/selectors";

import DataTable from "@/components/DataTable/DataTable";
import DataTableColumnHeader from "@/components/DataTable/DataTableColumnHeader";
import { Button } from "@/components/ui/button";
import { HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { HoverCard } from "@radix-ui/react-hover-card";

const intlDTF = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

function EmployeeList() {
  const employees = useEmployeesSelector();
  const departments = useDepartmentsSelector();
  const states = useStatesSelector();

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
      cell: ({ row, column }) => {
        const value = row.getValue(column.id);
        const state = states.find((item) => item.abbreviation === value);
        return (
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="none" className="font-normal">
                {value}
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="flex justify-center items-center w-fit space-x-4">
              {state.name} ({state.abbreviation})
            </HoverCardContent>
          </HoverCard>
        );
      },
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
  ];

  const filters = [
    {
      column: "department",
      title: "Department",
      options: departments.map((department) => ({
        value: department.name,
        label: department.name,
      })),
    },
    {
      column: "state",
      title: "State",
      options: states.map((state) => ({
        value: state.abbreviation,
        label: state.name,
      })),
    },
  ];

  return (
    <>
      <h2 className="text-3xl text-center font-bold mb-4 p-4">Employee List</h2>
      <DataTable
        columns={columns}
        data={employees}
        search="firstName"
        filters={filters}
      />
    </>
  );
}

export default EmployeeList;
