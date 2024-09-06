import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useDepartmentsSelector, useStatesSelector } from "@/redux/selectors";
import { zodResolver } from "@hookform/resolvers/zod";
import PropTypes from "prop-types";
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

function EmployeeForm({ employee, submit }) {
  const form = useForm({
    defaultValues: { ...employee },
    resolver: zodResolver(employeeSchema),
  });

  const { control } = form;

  const states = useStatesSelector();
  const departments = useDepartmentsSelector();

  return (
    <Form {...form}>
      <form
        noValidate
        onSubmit={form.handleSubmit(submit)}
        className="w-1/3 space-y-6 mx-auto"
      >
        <FormText name="firstName" label="First Name" control={control} />
        <FormText name="lastName" label="Last Name" control={control} />
        <div className="flex flex-row justify-between">
          <FormDate
            name="dateOfBirth"
            label="Date of Birth"
            control={control}
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
            <div className="flex flex-row justify-between gap-10">
              <FormCombo
                name="state"
                label="State"
                placeholder="Select a state"
                options={states}
                optionLabel="name"
                optionValue="name"
                control={control}
                className=""
              />
              <FormNumber
                name="zipCode"
                label="Zip Code"
                control={control}
                className=""
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
          control={control}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

EmployeeForm.propTypes = {
  employee: PropTypes.object,
  submit: PropTypes.func,
};

export default EmployeeForm;
