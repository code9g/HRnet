import EmployeeForm from "@/components/forms/EmployeeForm";
import { useEmployeesSelector, useStatesSelector } from "@/redux/selectors";

function CreateEmployee() {
  const employees = useEmployeesSelector();
  const states = useStatesSelector();

  const employee = employees[0];
  //   const employee = {
  //   firstName: "",
  //   lastName: "",
  //   dateOfBirth: null,
  //   startDate: "",
  //   street: "",
  //   city: "",
  //   state: "",
  //   zipCode: "",
  //   department: "",
  // };

  function submit(data) {
    console.log("data:", data);
  }

  return (
    <EmployeeForm
      employee={{
        ...employee,
        dateOfBirth: new Date("2000-01-01"),
        startDate: new Date("2024-01-01"),
        zipCode: employee.zipCode.toString(),
        state: states.find((state) => state.name === employee.state)
          ?.abbreviation,
      }}
      submit={submit}
    />
  );
}

export default CreateEmployee;
