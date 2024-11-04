import EmployeeForm from "@/components/forms/EmployeeForm";
import MessageModal from "@/components/MessageModal";
import { useStatesSelector } from "@/redux/selectors";
import { createEmployee } from "@/redux/slices/employeesSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

function CreateEmployee() {
  const states = useStatesSelector();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

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

    dispatch(createEmployee(data));

    console.log("data:", data);

    setIsOpen(true);
  }

  return (
    <>
      <h2 className="mb-4 p-4 text-center text-3xl font-bold">
        Create an Employee
      </h2>
      <EmployeeForm employee={employee} submit={submit} />
      <MessageModal isOpen={isOpen} close={() => setIsOpen(false)}>
        Employee created susscessfuly !
      </MessageModal>
    </>
  );
}

export default CreateEmployee;
