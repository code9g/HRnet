import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  createEmployee,
  deleteAllEmployees,
} from "@/redux/slices/employeesSlice";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import employees from "../data/employees.json";

function Settings() {
  const fakeRef = useRef(null);
  const dispatch = useDispatch();

  const handleGenerate = (e) => {
    e.preventDefault();
    let value = parseInt(fakeRef.current.value, 10);
    console.log(`Add ${value} fake employee(s)`);

    const n = employees.length;
    let i;
    while (value > 0) {
      i = Math.ceil(Math.random() * n);
      dispatch(createEmployee(employees[i]));
      value--;
    }
  };

  const handleDeleteAll = (e) => {
    e.preventDefault();
    console.log("Remove all employees");
    dispatch(deleteAllEmployees());
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
              <Label htmlFor="fake" className="text-nowrap">
                How to ?
              </Label>
              <Input ref={fakeRef} id="fake" type="number" defaultValue={5} />
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
              Generate
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

Settings.propTypes = {};

export default Settings;
