import { useState } from "react";
import { animations } from "./GSAPAnimations";
import SavedEmployeeButtons from "./SavedEmployeeButtons";

function SaveEmployee({ employees, updateEmployees }) {
  //States
  const [isContentEditable, setIsContentEditable] = useState(false);

  const handleDelete = (index) => {
    // Create a copy of the employees array and remove the item at the specified index
    const updatedEmployees = [...employees];
    updatedEmployees.splice(index, 1);
    // Update the employees state using the updateEmployees function
    updateEmployees(updatedEmployees);

    // Log the number of employees saved
    if (updatedEmployees.length === 0) {
      console.log("# of employees:", 0);
    } else {
      console.log("# of employees:", updatedEmployees.length);
    }
  };

  const handleEdit = (index) => {
    console.log(employees[index]);
    const employeeToEdit = employees[index];
    setIsContentEditable(true);
  };

  return (
    <>
      {employees.length !== 0 ? (
        <h1
          className="saved-employees-title"
          title="saved employees (limit of 6)"
        >
          Saved Employee{employees.length > 1 ? "s" : ""}
        </h1>
      ) : (
        ""
      )}
      <div className="parent-wrapper">
        {employees.map((element, index) => {
          return (
            <div
              id={`employee-${index}`}
              className="child-wrapper"
              key={index}
              draggable="true"
            >
              <SavedEmployeeButtons
                onDelete={() => handleDelete(index)}
                onEdit={() => handleEdit(index)}
                animations={animations}
              />
              <div className="saved-employees">
                <p>
                  Name:{" "}
                  <strong contentEditable={isContentEditable}>
                    {element.name}
                  </strong>
                </p>
                <p>
                  Role:{" "}
                  <strong contentEditable={isContentEditable}>
                    {element.role}
                  </strong>
                </p>
                <p>
                  Salary:{" "}
                  <strong contentEditable={isContentEditable}>
                    {element.salary}
                  </strong>
                </p>
                <p>
                  Work Model:{" "}
                  <strong contentEditable={isContentEditable}>
                    {element.workModel}
                  </strong>
                </p>
                <p>
                  Years of Experience:{" "}
                  <strong contentEditable={isContentEditable}>
                    {element.yoe}
                  </strong>
                </p>
                <p>
                  Favorite Office Supply:{" "}
                  <strong contentEditable={isContentEditable}>
                    {element.favoriteOfficeSupply}
                  </strong>
                </p>
                <p>
                  Hobbies:
                  <strong contentEditable={isContentEditable}>
                    {element.hobbies}
                  </strong>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default SaveEmployee;