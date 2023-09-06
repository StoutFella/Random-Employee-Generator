import { animations } from "./GSAPAnimations";
import SavedEmployeeButtons from "./SavedEmployeeButtons";

function SaveEmployee({ employees, updateEmployees }) {
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
                animations={animations}
              />
              <p>
                <strong>Name:</strong> {element.name}
                <br />
                <strong>Role:</strong> {element.role}
                <br />
                <strong>Salary:</strong> {element.salary}
                <br />
                <strong>Work Model:</strong> {element.workModel}
                <br />
                <strong>Years of Experience:</strong> {element.yoe}
                <br />
                <strong>Favorite Office Supply:</strong>{" "}
                {element.favoriteOfficeSupply}
                <br />
                <strong>Hobbies:</strong> {element.hobbies}
                <br />
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default SaveEmployee;
