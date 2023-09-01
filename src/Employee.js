import SaveEmployee from "./SaveEmployee";

function Employee({ ...props }) {
  // const spacedHobbies = props.split(',').join(', ');
  // console.log("Console adds: ", { ...props });
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
          <strong>Salary:</strong>${props.salary}.00
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

        {/* do conditional rendering of the below component (so it dont show up on page load) */}
        <SaveEmployee
          id={props.userId}
          name={props.name}
          role={props.role}
          salary={props.salary}
          hobbies={props.hobbies}
          favoriteOfficeSupply={props.officeSupplyChoice}
          yoe={props.yoe}
        />
      </div>
    </>
  );
}

export default Employee;
