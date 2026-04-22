import React, { useState } from "react";
import "../css/EditDialog.css";

const EditDialog = (props) => {
    const [result, setResult] = useState("");
    const [prevSrc, setPrevSrc] = useState("https://demo-backend-p8iz.onrender.com/images/"+props.category +"/"+props.img_name);
    const [features, setFeatures] = useState(Array.isArray(props.features)? props.features : props.features ? props.features.split(",") : [""]);
    const [category, setCategory] = useState(props.category || "");

    const uploadImage = (e) => {
        setPrevSrc(URL.createObjectURL(e.target.files[0]));
    }; 

    const onSubmit = async(e) => {
        e.preventDefault();
        setResult("...sending");
        const postURLLocal = "http://localhost:3002/api/items";
        const postURLRender = "https://demo-backend-p8iz.onrender.com/api/items";

        const formData = new FormData(e.target);
        console.log(...formData);

        formData.delete("features");
        features.forEach(f => {
            if(f.trim() !== "") formData.append("features[]", f);
        });

        const response = await fetch(postURLRender+`/${props._id}`,
            {
                method:"PUT",
                body:formData
            }
        );

        if(response.status == 200) {
            setResult("Item has been updated!");
            e.target.reset();
            props.closeEditDialog();
            props.updateItem(await response.json());
        } else {
            setResult("Error updating item");
        }
    };
        // gemini ai helped with this code
        const featuresChange = (index, value) => {
            const newFeatures = [...features];
            newFeatures[index] = value;
            setFeatures(newFeatures);
        };

        const newFeature = (e) => {
            e.preventDefault();
            setFeatures([...features, ""]);
        }

        const removeFeature = (index) => {
            const newFeatures = features.filter((_, i) => i !== index);
            setFeatures(newFeatures);
        };

    return (
          <div id="house-dialog" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    <span
                        id="dialog-close"
                        className="w3-button w3-display-topright"
                        onClick={props.closeEditDialog}
                    >
                        &times;
                    </span>
                    <div>
                        <form id="addItemForm" onSubmit={onSubmit}>
                            <p id="dialogTitle">
                                <label htmlFor="form_title">Item: </label>
                                <input type="text" id="form_title" name="title" defaultValue={props.title} required min="3" />
                            </p>
                            <p id="dialogPrice" className="columns">
                                <label htmlFor="price" >Price: </label>
                                <input type="number" id="price" name="price" defaultValue={props.price} required/>
                            </p>
                            <p id="dialogFeatures">
                                <label htmlFor="features">Features: </label>
                                <div>
                                    {features.map((feature, index) => (
                                    <div key={index} id="features-div" className="columns"> 
                                        <input type="text" className="features" name="features" value={feature} required onChange={(e) => featuresChange(index, e.target.value)}/>
                                        {index > 0 && (
                                            <button type="button" id="remove-feat-btn" onClick={() => removeFeature(index)}>
                                                &times;
                                            </button>
                                        )}
                                    </div>
                                ))}
                                </div>
                                <button id="add-feature-btn" type="button" onClick={newFeature}>
                                    +
                                </button>
                            </p>
                            {(category === "mens" || category === "womens") && (
                                <>
                                    <p id="dialogCare">
                                        <label htmlFor="care">Care: </label>
                                        <input type="text" id="care" name="care" defaultValue={props.care} required />
                                    </p>
                                    <p id="dialogFit">
                                        <label htmlFor="size_fit">Size and Fit: </label>
                                        <input type="text" id="size_fit" name="size_fit" defaultValue={props.size} required />
                                    </p>
                                </>
                            )}
                            <p id="dialogCat">
                                <label htmlFor="category">Category: </label>
                                <select id="category" name="category" required value={category} onChange={(e) => setCategory(e.target.value)}>
                                    <option value="">Select Category</option>
                                    <option value="womens">Womens</option>
                                    <option value="mens">Mens</option>
                                    <option value="decor">Decor</option>
                                </select>
                            </p>
                            <section id="dialogImg">
                                <div>
                                    <p id="img-prev-section">
                                        {prevSrc!=""?
                                        (<img id="img-prev" src={prevSrc}></img>):
                                        ("")
                                        }
                                    </p>
                                </div>
                                <p id="img-upload">
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
        </div>
    );
}

export default EditDialog;