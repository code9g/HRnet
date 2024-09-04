import columns from "../data/employees.columns.json";
import { useEmployeesSelector } from "../redux/selectors";

function EmployeeList() {
  const employees = useEmployeesSelector();

  const transform = (data, field, type) => {
    switch (type) {
      case "date":
        return data.slice(0, 10);
      default:
        if (field === "zipCode") {
          return data.toString().padStart(5, "0");
        }
        return data;
    }
  };

  return (
    <div>
      <table style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <td key={index}>{column.title}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, rowIndex) => (
            <tr
              key={employee.id}
              style={{
                backgroundColor: rowIndex % 2 ? "#ffffff" : "#e0e0e0",
              }}
            >
              {columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  style={{
                    padding: "4px",
                    borderLeft: "1px solid #e0e0e0",
                  }}
                >
                  {transform(employee[column.data], column.data, column.type)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

EmployeeList.propTypes = {};

export default EmployeeList;
