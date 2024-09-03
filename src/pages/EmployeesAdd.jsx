import { useSelector } from "react-redux";

function EmployeesAdd() {
  const states = useSelector((state) => state.states);
  console.log(states);
  return (
    <>
      <div>
        <select>
          {states.map((state) => (
            <option key={state.abbreviation}>{state.name}</option>
          ))}
        </select>
      </div>
    </>
  );
}

EmployeesAdd.propTypes = {};

export default EmployeesAdd;
