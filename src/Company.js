import "./styles.css";
import { useState } from "react";
import Employee from "./Employee";
import { employeesData } from "./employeesData";
export default function Company() {
  // let randomNumber = Math.floor(Math.random() * employeesData.length);

  /* 
    Declaring the above randomNumber outside of the setState function results in limited 
    amount of random numbers generated (it stops generating when it reaches the length of 
    the employeeData object. That's why I'm declaring it inside each setState function).
  */

  //States
  let [name, setName] = useState("Joe Exotic");
  let [role, setRole] = useState("none");
  let [salary, setSalary] = useState(0);
  let [hobbies, setHobbies] = useState([" Drawing, Swimming, Skating "]);
  let [yearsOfExperience, setYearsOfExperience] = useState(0);
  let [randomOfficeSupply, setRandomOfficeSupply] = useState("marker");

  const getRandomHobbies = () => {
    let randomNumber = Math.floor(Math.random() * employeesData.length);
    setHobbies((hobbies = " " + employeesData[randomNumber]["hobbies"]));
  };

  const getRandomName = () => {
    let randomNumber = Math.floor(Math.random() * employeesData.length);
    setName((name = " " + employeesData[randomNumber]["name"]));
  };

  const getRandomRole = () => {
    let randomNumber = Math.floor(Math.random() * employeesData.length);
    setRole((role = " " + employeesData[randomNumber]["role"]));
  };

  const getRandomSalary = () => {
    let randomNumber = Math.floor(Math.random() * employeesData.length);
    setSalary((salary = " " + employeesData[randomNumber]["salary"]));
  };

  const getRandomOfficeSupply = () => {
    let randomNumber = Math.floor(Math.random() * employeesData.length);
    setRandomOfficeSupply(
      (randomOfficeSupply =
        " " + employeesData[randomNumber]["favoriteOfficeSupply"])
    );
  };

  const getRandomYears = () => {
    let randomNumber = Math.floor(Math.random() * employeesData.length);
    setYearsOfExperience(
      (yearsOfExperience = " " + employeesData[randomNumber]["yoe"])
    );
  };

  return (
    <div className="App">
      <h1>Random Employee Data</h1>
      <p className="description">
        Click the texts to generate a maximum of 10 random employees.
      </p>
      <Employee
        name={name}
        role={role}
        salary={salary}
        hobbies={hobbies}
        officeSupplyChoice={randomOfficeSupply}
        favoriteOfficeSupply={randomOfficeSupply}
        yoe={yearsOfExperience}
        randomRole={getRandomRole}
        randomName={getRandomName}
        randomSalary={getRandomSalary}
        randomYearsOfX={getRandomYears}
        randomHobbies={getRandomHobbies}
        randomOfficeSupply={getRandomOfficeSupply}
      />
    </div>
  );
}
