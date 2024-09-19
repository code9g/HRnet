import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useDepartmentsSelector } from "@/redux/selectors";
import {
  createEmployee,
  deleteAllEmployees,
} from "@/redux/slices/employeesSlice";
import { faker } from "@faker-js/faker";
import { nanoid } from "@reduxjs/toolkit";
import { useRef } from "react";
import { useDispatch } from "react-redux";

function Settings() {
  const departments = useDepartmentsSelector();

  const fakeRef = useRef(null);
  const fakeId = "fake-" + nanoid(4);

  const dispatch = useDispatch();

  const fakeEmployee = () => ({
    id: nanoid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    dateOfBirth: faker.date.birthdate(),
    startDate: faker.date.recent(),
    street: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state({ abbreviated: true }),
    zipCode: faker.location.zipCode("#####"),
    department:
      departments[Math.floor(Math.random() * departments.length)].name,
  });

  const handleGenerate = (e) => {
    e.preventDefault();
    let value = parseInt(fakeRef.current.value, 10);
    console.log(`Add ${value} fake employee(s)...`);
    try {
      for (; value > 0; value--) {
        dispatch(createEmployee(fakeEmployee()));
      }
    } catch (e) {
      console.log(`Add fake employee(s) failed !`);
      console.log(e);
      throw e;
    }
    console.log(`Add fake employee(s) successfully`);
  };

  const handleDeleteAll = (e) => {
    e.preventDefault();
    console.log("Remove all employees...");
    try {
      dispatch(deleteAllEmployees());
    } catch (e) {
      console.log("Remove all employees failed !");
      console.log(e);
      throw e;
    }
    console.log("Remove all employees successfully");
  };

  return (
    <>
      <h2 className="text-3xl text-center font-bold mb-4 p-4">Settings</h2>
      <div className="flex flex-col gap-4 w-[400px] mx-auto">
        <Card className="shadow">
          <CardHeader>
            <CardTitle>Generate fake employee(s)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-row items-center gap-4">
              <Label htmlFor={fakeId} className="text-nowrap">
                How to ?
              </Label>
              <Input
                ref={fakeRef}
                id={fakeId}
                type="number"
                min={1}
                defaultValue={5}
              />
              <Button type="button" onClick={handleGenerate}>
                Generate
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Delete all employees</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <Button type="button" onClick={handleDeleteAll}>
              Delete all
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

Settings.propTypes = {};

export default Settings;
