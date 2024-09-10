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
