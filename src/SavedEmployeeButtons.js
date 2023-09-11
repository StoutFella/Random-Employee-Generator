import React from "react";
import { animations } from "./GSAPAnimations";

function SavedEmployeeButtons({ onDelete, onEdit, employee }) {
  return (
    <>
      <div className="SavedEmployeeButtons">
        <button
          className="delete-button"
          onClick={onDelete}
          title="Delete employee"
        >
          Delete
        </button>
        <button className="edit-button" onClick={onEdit} title="Edit employee">
          Edit
        </button>
      </div>
    </>
  );
}

export default SavedEmployeeButtons;