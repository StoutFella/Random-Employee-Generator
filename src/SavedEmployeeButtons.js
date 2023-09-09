import React from "react";
import { animations } from "./GSAPAnimations";

function SavedEmployeeButtons({ onDelete, onEdit, employee }) {
  const handleDeleteClick = () => {
    // Call the onDelete function passed from the parent component
    onDelete();
    // Call the animation functions as needed
    // const elementToAnimate = document.getElementById("employee-some-index"); // Replace with the appropriate element ID
    // if (elementToAnimate) {
    //   fadeOut(elementToAnimate);
    // }
  };

  const handleEditClick = () => {
    console.log(employee);
    onEdit();

    // Call the animation functions as needed
    const elementToAnimate = document.getElementById("employee-some-index"); // Replace with the appropriate element ID
    if (elementToAnimate) {
      animations.fadeOut(elementToAnimate);
    }
  };

  return (
    <>
      <div className="SavedEmployeeButtons">
        <button onClick={handleDeleteClick} title="Delete employee">
          Delete
        </button>
        <button onClick={handleEditClick} title="Edit employee">
          Edit
        </button>
      </div>
    </>
  );
}

export default SavedEmployeeButtons;