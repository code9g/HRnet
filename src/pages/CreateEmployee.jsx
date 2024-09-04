import { useDepartmentsSelector, useStatesSelector } from "../redux/selectors";

function CreateEmployee() {
  const states = useStatesSelector();
  const departments = useDepartmentsSelector();

  const handleSubmit = (e) => {
    e.preventDefault();
    // ...
  };

  return (
    <>
      <div>
        <form
          action="#"
          id="create-employee"
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" />

          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" />

          <label htmlFor="date-of-birth">Date of Birth</label>
          <input id="date-of-birth" type="date" />

          <label htmlFor="start-date">Start Date</label>
          <input id="start-date" type="date" />

          <fieldset
            className="address"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input id="street" type="text" />

            <label htmlFor="city">City</label>
            <input id="city" type="text" />

            <label htmlFor="state">State</label>
            <select name="state" id="state">
              {states.map((state) => (
                <option key={state.abbreviation}>{state.name}</option>
              ))}
            </select>

            <label htmlFor="zip-code">Zip Code</label>
            <input id="zip-code" type="number" />
          </fieldset>

          <label htmlFor="department">Department</label>
          <select name="department" id="department">
            {departments.map((department) => (
              <option key={department.id}>{department.name}</option>
            ))}
          </select>
        </form>
      </div>
    </>
  );
}

CreateEmployee.propTypes = {};

export default CreateEmployee;
