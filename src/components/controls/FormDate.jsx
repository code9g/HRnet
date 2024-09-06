import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import PropTypes from "prop-types";

import { useState } from "react";
import { Calendar } from "../Calendar";
import { Button } from "../ui/button";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

const intlDateFormat = new Intl.DateTimeFormat("en-US", {
  month: "2-digit",
  day: "2-digit",
  year: "numeric",
});

const format = (date) => intlDateFormat.format(date);

function FormDate({ name, label, description, className, control }) {
  const [open, setOpen] = useState(false);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn("flex flex-col", className)}>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  ref={field.ref}
                  className={cn(
                    "w-[280px] justify-start text-left font-normal",
                    !field.value && "text-muted-foreground",
                    "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {field.value ? format(field.value) : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={field.value}
                  defaultMonth={field.value}
                  captionLayout="dropdown-buttons"
                  today={new Date()}
                  onSelect={(value) => {
                    field.onChange(value);
                    setOpen(false);
                  }}
                  fromYear={1960}
                  toYear={2030}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

FormDate.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.string,
  control: PropTypes.object,
};

export default FormDate;
