import { useEffect } from "react";
export default function DeleteConfirmation({ onConfirm, onCancel }) {
  useEffect(() => {
    console.log("Delete TIMER SET");
    const timer = setTimeout(() => {
      console.log("Delete TIMER EXPIRED");
    }, 3000);
    //clean up timer function
    return () => {
      console.log("Delete TIMER CLEARED");
      clearTimeout(timer);
    };
  }, [onConfirm]);
  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
    </div>
  );
}
