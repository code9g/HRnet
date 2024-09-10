import EmployeeForm from "@/components/forms/EmployeeForm";
import { useStatesSelector } from "@/redux/selectors";

function CreateEmployee() {
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

  const states = useStatesSelector();
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
  }

  return (
    <>
      <div className="p-4">
        <h2 className="text-3xl text-pri text-center font-bold mb-4 p-4">
          Create an Employee
        </h2>
        <EmployeeForm employee={employee} submit={submit} />
      </div>
    </>
  );
}

export default CreateEmployee;
