import "./styles.css";
import { useState } from "react";
import Employee from "./Employee";
import { employeesData } from "./employeesData";
export default function Company() {
  //States
  let [name, setName] = useState("Joe Exotic");
  let [role, setRole] = useState("none");
  let [salary, setSalary] = useState(0);
  let [workModel, setWorkModel] = useState("hybrid");
  let [hobbies, setHobbies] = useState([" Drawing, Swimming, Skating "]);
  let [yearsOfExperience, setYearsOfExperience] = useState(0);
  let [randomOfficeSupply, setRandomOfficeSupply] = useState("marker");
  let [randomData, setRandomData] = useState({ a: 1, b: 2, c: 3 });

  // Employees state
  const [employees, setEmployees] = useState([]);

  const getRandomNumber = () =>
    Math.floor(Math.random() * employeesData.length);

  //Randomizer
  const getRandomData = () => {
    const randomNumber = getRandomNumber(); // Reuse getRandomNumber
    setRandomData(() => {
      setName((name = " " + employeesData[randomNumber]["name"]));
      setHobbies((hobbies = " " + employeesData[randomNumber]["hobbies"]));
      setRole((role = " " + employeesData[randomNumber]["role"]));
      setWorkModel(
        (workModel = " " + employeesData[randomNumber]["workModel"])
      );
      setSalary((salary = " " + employeesData[randomNumber]["salary"]));
      setYearsOfExperience(
        (yearsOfExperience = " " + employeesData[randomNumber]["yoe"])
      );
      setRandomOfficeSupply(
        (randomOfficeSupply =
          " " + employeesData[randomNumber]["favoriteOfficeSupply"])
      );
    });
  };

  // Save Employee function
  const saveEmployee = () => {
    if (employees.length < 10) {
      const newEmployee = {
        name,
        role,
        salary,
        workModel,
        hobbies,
        yearsOfExperience,
        randomOfficeSupply
      };

      setEmployees((current) => [...current, newEmployee]);
      console.log("Employee added:", employees.length + 1);
    } else {
      console.log("Reached 10 employees limit");
    }
  };

  const getRandomValues = (setterFunction, dataKey) => {
    const randomNumber = getRandomNumber();
    /*
    Massage the data (add spaces/commas/periods, remove special characters etc...) then bring it into this fucnction
    Instead of bloating up this function by writing & checking conditions (if/else, ternary, loops...). 
    */
    setterFunction(`${employeesData[randomNumber][dataKey]}`);
  };

  const getRandomName = () => getRandomValues(setName, "name");
  const getRandomHobbies = () => getRandomValues(setHobbies, "hobbies");
  const getRandomRole = () => getRandomValues(setRole, "role");
  const getRandomSalary = () => getRandomValues(setSalary, "salary");
  const getRandomWorkModel = () => getRandomValues(setWorkModel, "workModel");
  const getRandomOfficeSupply = () =>
    getRandomValues(setRandomOfficeSupply, "favoriteOfficeSupply");
  const getRandomYears = () => getRandomValues(setYearsOfExperience, "yoe");

  return (
    <div className="App">
      <h1>Random Employee Data</h1>
      <p className="description">
        Click the <b>Randomizer</b> button or a specific field to generate data.
        <br></br>
        Click the <b>Save Employee</b> button to save your employee (maximum of
        10).
      </p>
      <Employee
        name={name}
        role={role}
        salary={salary}
        hobbies={hobbies}
        workModel={workModel}
        officeSupplyChoice={randomOfficeSupply}
        favoriteOfficeSupply={randomOfficeSupply}
        yoe={yearsOfExperience}
        randomRole={getRandomRole}
        randomName={getRandomName}
        randomSalary={getRandomSalary}
        randomYearsOfX={getRandomYears}
        randomHobbies={getRandomHobbies}
        randomOfficeSupply={getRandomOfficeSupply}
        randomWorkModel={getRandomWorkModel}
        randomData={getRandomData}
        saveEmployee={saveEmployee}
        data={randomData} //new prop (may need to delete)
      />
    </div>
  );
}