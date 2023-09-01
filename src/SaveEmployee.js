import React, { useEffect, useState } from "react";
import SavedEmployeeButtons from "./SavedEmployeeButtons";

function SaveEmployee({ ...props }) {
  const [employees, setEmployees] = useState([]);

  const displayEmployee = () => {
    if (employees.length < 10) {
      setEmployees((current) => [...current, { ...props }]);
      console.log("employee added");
    } else {
      console.log("reached 10 employees limit");
      return;
    }
  };

  const handleDelete = (event, index) => {
    // Prevent event propagation to avoid unintended side effects
    event.stopPropagation();

    setEmployees((prevEmployees) => {
      // Create a new array without the employee at the clicked index
      const updatedEmployees = prevEmployees.filter((_, i) => i !== index);
      return updatedEmployees;
    });
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      // Your logic here to handle the key press event

      if (event.key === "s" || event.key === "S") {
        console.log(event.key);
        // displayEmployee();
      }

      if (event.key === "e" || event.key === "E") {
        console.log(event.key);
        //Export generated employee data
      }

      // console.log("Key pressed:", event.key);
    };

    // Add the event listener
    window.addEventListener("keydown", handleKeyPress);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);
  return (
    <>
      <div>
        <button
          className="save-employee-btn"
          title="Save random employee data"
          onClick={displayEmployee}
        >
          Save Employee
          <small>
            (or press <em>S</em>)
          </small>
        </button>
      </div>
      <h2
        id="savedEmployee"
        className="saved-employees-title"
        title="saved employees (limit of 6)"
      >
        {/* Need to conditionally render the title below "Saved Employees". 
         No need to show it if there is no data saved.*/}
        {/* SAVED EMPLOYEES */}
      </h2>

      {employees.length !== 0 ? (
        <h1>Saved Employee{employees.length > 1 ? "s" : ""}</h1>
      ) : (
        ""
      )}
      <div id="savedEmployees" className="parent-wrapper">
        {employees.map((element, index) => {
          return (
            <div className="child-wrapper" key={index} draggable="true">
              <SavedEmployeeButtons
                Delete={(event) => handleDelete(event, index)}
              />
              <p>
                <strong>Name:</strong> {element.name}
                <br></br>
                <strong>Role:</strong> {element.role}
                <br></br>
                <strong>Salary:</strong>
                {element.salary}
                <br></br>
                <strong>Years of Experience:</strong>
                {element.yoe}
                <br></br>
                <strong>Favorite Office Supply:</strong>
                {element.favoriteOfficeSupply}
                <br></br>
                <strong>Hobbies:</strong>
                {element.hobbies}
                <br></br>
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default SaveEmployee;
