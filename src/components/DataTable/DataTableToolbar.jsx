import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import PropTypes from "prop-types";
import DataTableFacetedFilter from "./DataTableFacetedFilter";
import { DataTableViewOptions } from "./DataTableViewOptions";

function DataTableToolbar({ table, search, filters = [], className }) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div
      className={cn("flex items-stretch justify-between h-[50px]", className)}
    >
      <div className="flex flex-1 items-stretch space-x-2">
        {table.getColumn(search) && (
          <Input
            name="search"
            placeholder="Filter..."
            value={table.getColumn(search)?.getFilterValue() ?? ""}
            onChange={(event) => {
              table.getColumn(search)?.setFilterValue(event.target.value);
            }}
            className="h-full w-[150px] lg:w-[250px]"
          />
        )}
        {filters.map((filter, index) => {
          const column = table.getColumn(filter.column);
          return (
            column && (
              <DataTableFacetedFilter
                key={index}
                column={column}
                title={filter.title}
                options={filter.options}
                optionLabel={filter.optionLabel}
                optionValue={filter.optionValue}
              />
            )
          );
        })}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-full px-2 lg:px-3"
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
  search: PropTypes.string.isRequired,
  filters: PropTypes.arrayOf(PropTypes.object),
  className: PropTypes.any,
};

export default DataTableToolbar;
