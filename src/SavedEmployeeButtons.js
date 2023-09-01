// import waste from "./Assets/Icons/trash-can.gif";

function SavedEmployeeButtons({ ...props }) {
  return (
    <>
      <div className="SavedEmployeeButtons">
        {/* <button>edit</button> */}
        <button onClick={props.Delete} title="Delete employee">
          {/* <img class="icons"
            src={waste} 
            alt="trash can icon"
          /> */}
          Delete
        </button>
        {/* {<button>copy</button>} */}
      </div>
    </>
  );
}

export default SavedEmployeeButtons;
