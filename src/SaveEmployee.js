import { useState } from "react";
import { animations } from "./GSAPAnimations";
import SavedEmployeeButtons from "./SavedEmployeeButtons";

function SaveEmployee({ employees, updateEmployees }) {
  // State to track the edit state for each employee
  const [isContentEditable, setIsContentEditable] = useState(
    new Array(employees.length).fill(false)
  );

  const handleDelete = (index) => {
    // Copy of employees array and removing the item at the specified index
    const updatedEmployees = [...employees];
    updatedEmployees.splice(index, 1);
    // Update employees state using updateEmployees function
    updateEmployees(updatedEmployees);
  };

  const handleEdit = (index) => {
    // Copy of edit state array
    const updatedIsContentEditable = [...isContentEditable];
    // Toggle edit state for clicked employee
    updatedIsContentEditable[index] = !updatedIsContentEditable[index];
    // Update state with modified array
    setIsContentEditable(updatedIsContentEditable);
  };

  return (
    <>
      {employees.length !== 0 ? (
        <h1
          className="saved-employees-title"
          title="saved employees (limit of 10)"
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
                employee={employees[index]}
                onDelete={() => handleDelete(index)}
                onEdit={() => handleEdit(index)}
                animations={animations}
              />
              <div className="saved-employees">
                <p>
                  Name:
                  <strong contentEditable={isContentEditable[index]} autofocus>
                    {element.name}
                  </strong>
                </p>
                <p>
                  Role:
                  <strong contentEditable={isContentEditable[index]}>
                    {element.role}
                  </strong>
                </p>
                <p>
                  Salary:
                  <strong contentEditable={isContentEditable[index]}>
                    {element.salary}
                  </strong>
                </p>
                <p>
                  Work Model:
                  <strong contentEditable={isContentEditable[index]}>
                    {element.workModel}
                  </strong>
                </p>
                <p>
                  Years of Experience:
                  <strong contentEditable={isContentEditable[index]}>
                    {element.yoe}
                  </strong>
                </p>
                <p>
                  Favorite Office Supply:
                  <strong contentEditable={isContentEditable[index]}>
                    {element.favoriteOfficeSupply}
                  </strong>
                </p>
                <p>
                  Hobbies:
                  <strong contentEditable={isContentEditable[index]}>
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