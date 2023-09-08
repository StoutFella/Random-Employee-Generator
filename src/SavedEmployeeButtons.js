import React from "react";
import { animations } from "./GSAPAnimations";

function SavedEmployeeButtons({ onDelete, onEdit }) {
  const handleDeleteClick = () => {
    // Call the onDelete function passed from the parent component
    onDelete();
    // Call the animation functions as needed
    const elementToAnimate = document.getElementById("employee-some-index"); // Replace with the appropriate element ID
    if (elementToAnimate) {
      fadeOut(elementToAnimate);
    }
  };

  const handleEditClick = () => {
    // Call the onDelete function passed from the parent component
    // onDelete();
    onEdit();

    // Call the animation functions as needed
    const elementToAnimate = document.getElementById("employee-some-index"); // Replace with the appropriate element ID
    if (elementToAnimate) {
      fadeOut(elementToAnimate);
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
