/*
Listen to keyboard events on Window or Document object 
and perform CRUD and other operations (share or export data)
*/
import displayEmployee from "./SaveEmployee";

const HandleClick = (event) => {
  if (event.key === "s" || event.key === "S") {
    displayEmployee();
  }

  if (event.key === "d" || event.key === "D") {
    //Delete employee data by referencing the ID (yet to be built)
  }

  if (event.key === "c" || event.key === "C") {
    //Copy employee data by referencing the ID (yet to be built)
  }
  if (event.key === "u" || event.key === "U") {
    //Update generated employee data
  }
  if (event.key === "e" || event.key === "E") {
    //Exprot generated employee data
  }
};

export default HandleClick;
