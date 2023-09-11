import { useState } from "react";
import { animations } from "./GSAPAnimations";
import SavedEmployeeButtons from "./SavedEmployeeButtons";

function SaveEmployee({ employees, updateEmployees }) {
  // State to track the edit state for each employee
  const [isContentEditable, setIsContentEditable] = useState(
    new Array(employees.length).fill(false)
  );

  const handleDelete = (index) => {
    const updatedEmployees = [...employees];
    updatedEmployees.splice(index, 1);
    updateEmployees(updatedEmployees);
  };

  const handleEdit = (index) => {
    const updatedIsContentEditable = [...isContentEditable];
    // Toggle edit state for clicked employee
    updatedIsContentEditable[index] = !updatedIsContentEditable[index];
    // Update state with modified array
    setIsContentEditable(updatedIsContentEditable);
    // console.log("Employee:", employees[index]); //single employee
    const editButton = document.querySelector(
      `#employee-${index}`,
      "saved-employees"
    ).children[0].lastChild;

    const editValues = document
      .querySelector(`#employee-${index}`)
      .children[1].querySelectorAll("em");

    if (editButton) {
      editButton.classList.toggle("editable");
      editButton.textContent = updatedIsContentEditable[index]
        ? "...editing"
        : "Edit";
    }

    editValues.forEach((element) => {
      element.classList.toggle("edit");
    });
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
                    <em>{element.name}</em>
                  </strong>
                </p>
                <p>
                  Role:
                  <strong contentEditable={isContentEditable[index]}>
                    <em>{element.role}</em>
                  </strong>
                </p>
                <p>
                  Salary:
                  <strong contentEditable={isContentEditable[index]}>
                    <em>{element.salary}</em>
                  </strong>
                </p>
                <p>
                  Work Model:
                  <strong contentEditable={isContentEditable[index]}>
                    <em>{element.workModel}</em>
                  </strong>
                </p>
                <p>
                  Years of Experience:
                  <strong contentEditable={isContentEditable[index]}>
                    <em>{element.yoe}</em>
                  </strong>
                </p>
                <p>
                  Favorite Office Supply:
                  <strong contentEditable={isContentEditable[index]}>
                    <em>{element.favoriteOfficeSupply}</em>
                  </strong>
                </p>
                <p>
                  Hobbies:
                  <strong contentEditable={isContentEditable[index]}>
                    <em>{element.hobbies}</em>
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