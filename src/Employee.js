import { useState } from "react";
import SaveEmployee from "./SaveEmployee";

function Employee({ ...props }) {
  const [employees, setEmployees] = useState([]);

  // Define the updateEmployees function to update the employees state
  const updateEmployees = (employees) => {
    console.log("delete");
    setEmployees(employees);
  };

  const displayEmployee = () => {
    if (employees.length < 10) {
      setEmployees((current) => [...current, { ...props }]);
      console.log("# of employees:", employees.length + 1);
    } else {
      console.log("reached 10 employees limit");
    }
  };

  return (
    <>
      <div className="employees-data">
        <p title={props.name} onClick={props.randomName}>
          <strong>Name: </strong> {props.name}
        </p>
        <p title={props.role} onClick={props.randomRole}>
          <strong>Role: </strong> {props.role}
        </p>
        <p title={props.salary} onClick={props.randomSalary}>
          <strong>Salary:</strong>${props.salary}
        </p>
        <p title={props.workModel} onClick={props.randomWorkModel}>
          <strong>Work Model: </strong> {props.workModel}
        </p>
        <p title={props.yoe} onClick={props.randomYearsOfX}>
          <strong>Years of Experience: </strong>
          {props.yoe}
        </p>
        <p
          title={props.favoriteOfficeSupply}
          onClick={props.randomOfficeSupply}
        >
          <strong>Favorite office supply: </strong> {props.favoriteOfficeSupply}
        </p>
        <p title={props.hobbies} id="hobbies" onClick={props.randomHobbies}>
          <strong>Hobbies: </strong> {props.hobbies}
        </p>

        <section id="general-btns">
          <button title="Save Employee Data" onClick={displayEmployee}>
            Save Employee
          </button>

          <button title="Randomize All Data" onClick={props.randomData}>
            Randomizer
          </button>
        </section>

        {/* do conditional rendering of the below component (so it dont show up on page load) */}
        <SaveEmployee
          id={props.userId}
          name={props.name}
          role={props.role}
          salary={props.salary}
          workModel={props.workModel}
          hobbies={props.hobbies}
          favoriteOfficeSupply={props.officeSupplyChoice}
          yoe={props.yoe}
          randomData={props.randomData}
          employees={employees} // current emeployees to be passed as prop
          updateEmployees={updateEmployees} // Pass the function as a prop
        />
      </div>
    </>
  );
}

export default Employee;
