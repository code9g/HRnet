import EmployeeForm from "@/components/forms/EmployeeForm";

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

  function submit(data) {
    console.log("data:", data);
  }

  return <EmployeeForm employee={employee} submit={submit} />;
}

export default CreateEmployee;
