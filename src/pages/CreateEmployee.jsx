import EmployeeForm from "@/components/forms/EmployeeForm";
import { useStatesSelector } from "@/redux/selectors";
import { createEmployee } from "@/redux/slices/employeesSlice";
import { useDispatch } from "react-redux";

function CreateEmployee() {
  const states = useStatesSelector();
  const dispatch = useDispatch();

  const employee = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "",
  };

  function submit(data) {
    const state = states.find((state) => data.state === state.name);

    data = {
      ...data,
      dateOfBirth: data.dateOfBirth.toISOString(),
      startDate: data.startDate.toISOString(),
      state: state.abbreviation,
      zipCode: data.zipCode.toString().padStart(5, "0"),
    };

    console.log("data:", data);
    dispatch(createEmployee(data));
  }

  return (
    <>
      <h2 className="mb-4 p-4 text-center text-3xl font-bold">
        Create an Employee
      </h2>
      <EmployeeForm employee={employee} submit={submit} />
    </>
  );
}

export default CreateEmployee;
