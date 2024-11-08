import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useDepartmentsSelector, useStatesSelector } from "@/redux/selectors";
import { zodResolver } from "@hookform/resolvers/zod";
import PropTypes from "prop-types";
import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FormCombo from "../controls/FormCombo";
import FormDate from "../controls/FormDate";
import FormNumber from "../controls/FormNumber";
import FormText from "../controls/FormText";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const employeeSchema = z.object({
  firstName: z.string().trim().min(1, { message: "First name is required" }),
  lastName: z.string().trim().min(1, { message: "Last name is required" }),
  dateOfBirth: z
    .date({ message: "Date of Birth is required" })
    .refine((date) => new Date().getFullYear() - date.getFullYear() > 16, {
      message: "Date birth must be at least 16 ",
    }),
  startDate: z.date({ message: "Start date is required" }),
  street: z.string().trim().min(1, { message: "Street is required" }),
  city: z.string().trim().min(1, { message: "City is required" }),
  state: z.string().trim().min(1, { message: "State is required" }),
  zipCode: z.string().min(1, { message: "Zip Code is required" }),
  department: z.string().min(1, { message: "Department is required" }),
});

const EmployeeForm = forwardRef(({ employee, submit }, ref) => {
  const innerRef = useRef(null);
  useImperativeHandle(ref, () => innerRef?.current);

  const form = useForm({
    defaultValues: { ...employee },
    resolver: zodResolver(employeeSchema),
  });

  const { control, reset } = form;

  useEffect(() => {
    if (innerRef?.current) {
      innerRef.current.reset = reset;
    }
  }, [reset]);

  const states = useStatesSelector();
  const departments = useDepartmentsSelector();

  return (
    <Form {...form}>
      <form
        ref={innerRef}
        className="mx-auto w-1/2 space-y-6"
        onSubmit={form.handleSubmit(submit)}
        noValidate
      >
        <FormText name="firstName" label="First Name" control={control} />
        <FormText name="lastName" label="Last Name" control={control} />
        <div className="flex flex-col justify-between lg:flex-row">
          <FormDate
            name="dateOfBirth"
            label="Date of Birth"
            control={control}
            toYear={new Date().getFullYear() - 17}
          />
          <FormDate name="startDate" label="Start Date" control={control} />
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Address</CardTitle>
          </CardHeader>
          <CardContent>
            <FormText name="street" label="Street" control={control} />
            <FormText name="city" label="City" control={control} />
            <div className="flex flex-col justify-between gap-10 lg:flex-row">
              <FormCombo
                name="state"
                label="State"
                placeholder="Select a state"
                options={states}
                optionLabel="name"
                optionValue="name"
                control={control}
                ariaLabel="select state"
                className="mt-2 flex flex-col"
              />
              <FormNumber
                name="zipCode"
                label="Zip Code"
                control={control}
                className="mt-2 flex flex-col"
              />
            </div>
          </CardContent>
        </Card>
        <FormCombo
          name="department"
          label="Department"
          placeholder="Select a department"
          options={departments}
          className="flex flex-col"
          optionLabel="name"
          optionValue="name"
          ariaLabel="select department"
          control={control}
        />
        <div className="flex justify-end gap-4">
          <Button
            type="reset"
            variant="outline"
            onClick={() => reset(employee)}
          >
            Reset
          </Button>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
});

EmployeeForm.displayName = "EmployeeForm";

EmployeeForm.propTypes = {
  employee: PropTypes.object,
  submit: PropTypes.func,
};

export default EmployeeForm;
