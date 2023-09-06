import React from "react";
import { fadeOut } from "./GSAPAnimations";

function SavedEmployeeButtons({ onDelete, fadeOut }) {
  const handleDeleteClick = () => {
    // Call the onDelete function passed from the parent component
    onDelete();
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
        <button title="Edit employee">Edit</button>
      </div>
    </>
  );
}

export default SavedEmployeeButtons;
