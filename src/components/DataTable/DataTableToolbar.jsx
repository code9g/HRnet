import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useDepartmentsSelector, useStatesSelector } from "@/redux/selectors";
import { X } from "lucide-react";
import PropTypes from "prop-types";
import DataTableFacetedFilter from "./DataTableFacetedFilter";
import { DataTableViewOptions } from "./DataTableViewOptions";

function DataTableToolbar({ table }) {
  const departments = useDepartmentsSelector();
  const states = useStatesSelector();

  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          name="search"
          placeholder="Filter..."
          value={table.getColumn("firstName")?.getFilterValue() ?? ""}
          onChange={(event) => {
            table.getColumn("firstName")?.setFilterValue(event.target.value);
          }}
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {table.getColumn("department") && (
          <DataTableFacetedFilter
            column={table.getColumn("department")}
            title="Department"
            options={departments}
            optionLabel="name"
            optionValue="name"
          />
        )}
        {table.getColumn("state") && (
          <DataTableFacetedFilter
            column={table.getColumn("state")}
            title="State"
            options={states}
            optionValue="abbreviation"
            optionLabel="name"
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <X className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}

DataTableToolbar.propTypes = {
  table: PropTypes.object.isRequired,
};

export default DataTableToolbar;
