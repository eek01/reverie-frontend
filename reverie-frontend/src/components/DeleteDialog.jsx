import React, {useState} from "react"
import "../css/DeleteDialog.css";

const DeleteDialog = (props) => {
    const [result, setResult] = useState("");
    const deleteURLRender = "https://demo-backend-p8iz.onrender.com/api/items";

    const deleteItem = async() => {
        setResult("Sending");

        const response = await fetch(deleteURLRender + `/${props._id}`,
            {
                method:"DELETE"
            }
        );
        if(response.status === 200) {
            setResult("Successfully deleted");
            props.closeDeleteDialog();
            props.hideItem();
        } else {
            setResult("Unsuccessful delete");
        }
    }

    return (
        <div id="delete-content">
            <h3>Are you sure you want to delete the {props.title}</h3> 
            <section>
              <button id="no-delete-btn" onClick={props.closeDeleteDialog}>No</button>            
              <button id="yes-delete-btn" onClick={deleteItem}>Yes</button>
            </section>
            <p>{result}</p>
        </div>
    );
};

export default DeleteDialog;