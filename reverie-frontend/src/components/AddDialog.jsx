import "../css/AddDialog.css"
import { useState } from "react";

const AddDialog = (props) => {
    const [result, setResult] = useState("");
    const [prevSrc, setPrevSrc] = useState("");

    const uploadImage = (e) => {
        setPrevSrc(URL.createObjectURL(e.target.files[0]));
    };

    const addItemToServer = async(e) => {
        e.preventDefault();
        setResult("sending...");

        const formData = new FormData(e.target);
        console.log(...formData);

        const postURLLocal = "http://localhost:3002/api/items";
        const postURLRender = "https://demo-backend-p8iz.onrender.com/api/items";
        const response = await fetch(postURLRender, {
            "method":"POST",
            "body":formData
        });

        if(response.status === 200){
            setResult("Item Added");
            e.target.reset();
            props.addItemToList(await response.json());
            props.closeAddDialog();
        } else {
            setResult(response.message);
        }
    }

    return(
        <div id="add-dialog" className="w3-modal">
        <div className="w3-modal-content">
            <div className="w3-container">
            <span
                id="dialog-close"
                className="w3-button w3-display-topright"
                onClick={props.closeAddDialog}>
                &times;
            </span>
            <form id="addItemForm" onSubmit={addItemToServer}>
                <p id="dialogTitle">
                    <label htmlFor="title">Item Name: </label>
                    <input type="text" id="title" name="title" required min="3" />
                </p>
                <p id="dialogPrice">
                    <label htmlFor="price">Price: </label>
                    <input type="number" id="price" name="price" required />
                </p>
                <p id="dialogFeatures">
                    <label htmlFor="features">Features: </label>
                    <input type="text" id="features" name="features" required />
                </p>
                <p id="dialogCare">
                    <label htmlFor="care">Care: </label>
                    <input type="text" id="care" name="care" required />
                </p>
                <p id="dialogFit">
                    <label htmlFor="size_fit">Size and Fit: </label>
                    <input type="text" id="size_fit" name="size_fit" required />
                </p>
                <p id="dialogCat">
                    <label htmlFor="category">Category: </label>
                    <input type="text" id="category" name="category" required min="4" />
                </p>
                <section id="dialogImg">
                    <p id="img-prev-section">
                        {prevSrc===""?(""):(
                            <img id="img-prev" src={prevSrc} />
                        )}
                    </p>
                    <p>
                        <label htmlFor="img">Select Image</label>
                        <input type="file" id="img" name="img" accept="images/*" onChange={uploadImage}></input>
                    </p>
                </section>
                <p>
                    <button type="submit">Submit</button>
                </p>
                <p>{result}</p>
            </form>
            </div>
        </div>
        </div>
    );
    };

export default AddDialog;