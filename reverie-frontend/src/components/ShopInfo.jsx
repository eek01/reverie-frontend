import "../css/ShopInfo.css";
import "../css/Modal.css";
import {Link, useNavigate} from "react-router-dom";
import React, {useState} from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import EditDialog from "./EditDialog";
import DeleteDialog from "./DeleteDialog";

const ShopInfo = (props) => {
    const {id} = useParams();
    const navigate = useNavigate();

    const [showContent, setShowContent] = useState("details");
    const [showDialog, setShowDialog] = useState(false);
    const [item, setItem] = useState(props);

    const showEdit = (e) => {
        e.preventDefault();
        setShowContent("edit");
        setShowDialog("true");
    }

    const showDelete = (e) => {
        e.preventDefault();
        setShowContent("delete");
        setShowDialog("true");
    }

    const closeDialog = () => {
        setShowDialog(false);
    }

    const updateItem = (item) => {
        setItem(item);
    }
    
    const hideItem = () => {
        setShowContent(false);
    }

    return (
        <div id="shop-detail-container">
            <div id="shop">
                {/* Im not sure how to make it go back to the page it came from... Im assuming that is javascript :)) */}
                <Link id="back-btn" onClick={() => navigate(-1)}><p>&lt; Back to results</p></Link>
                <div id="shop-content" className="columns">
                    <div id="shop-img" className="one">
                        <img src={`https://demo-backend-p8iz.onrender.com/images/${item.category}/${item.img_name}`}/>
                    </div>
                    <div id="shop-description" className="one">
                        <div id="icons" className="columns">
                            <h3>{item.title}</h3>
                            <p className="columns">
                                <FontAwesomeIcon icon={faEdit} onClick={showEdit} style={{ fontSize: '24px'}}/>
                                <FontAwesomeIcon icon={faTrashCan} onClick={showDelete} style={{ fontSize: '24px'}}/>
                            </p>
                        </div>
                        {/* dialog */}
                          <div id="item-dialog" className="w3-modal" style={{ display: showDialog ? "block" : "none" }}>
                            <div className="w3-modal-content">
                                <div className="w3-container">
                                    <span
                                        id="dialog-close"
                                        className="w3-button w3-display-topright"
                                        onClick={closeDialog}
                                    >
                                        &times;
                                    </span>
                                    <div id="item-dialog-content">
                                        {showContent === "edit" ? (
                                            <EditDialog 
                                            category={props.category}
                                            key={props._id}
                                            _id={props._id}
                                            img_name={props.img_name}
                                            title={props.title}
                                            price={props.price}
                                            features={props.features}
                                            care={props.care} 
                                            size={props.size}
                                            closeEditDialog={closeDialog}
                                            updateItem={updateItem} 
                                        />
                                        ) : showContent === "delete" ? (
                                           <DeleteDialog 
                                            _id={props._id}
                                            title={props.title}
                                            closeDeleteDialog={closeDialog}
                                            hideItem={hideItem} 
                                        />
                                        ) : null}
                                        {/* {showContent === "details"?(
                                            <div>
                                            </div>
                                        ):showContent === "edit"?(
                                            <EditDialog 
                                                category={props.category}
                                                key={props._id}
                                                _id={props._id}
                                                img_name={props.img_name}
                                                title={props.title}
                                                price={props.price}
                                                features={props.features}
                                                care={props.care} 
                                                size={props.size}
                                                // !!!!!!!!!!!!!!!!!!!
                                                closeEditDialog = {closeDialog}
                                                updateItem={updateItem} />
                                        ):(
                                            <DeleteDialog 
                                                _id={props._id}
                                                name={props.name}
                                                closeDeleteDialog = {props.closeDialog}
                                                hideItem={hideItem} />
                                            )} */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <h5>{"$"+item.price}</h5>
                        <hr/>
                        {!(item.category === "decor") && (
                                <>
                                <p>Size</p>
                                <div id="size-btn">
                                    <div><h6>S</h6></div>
                                    <div><h6>M</h6></div>
                                    <div><h6>L</h6></div>
                                    <div><h6>XL</h6></div>
                                    <div><h6>XXL</h6></div>
                                </div>
                                </>
                            )}
                        <button id="buy-now-btn">Buy Now</button>
                        <hr/>
                        <div id="shop-details">
                            <h5>Details:</h5>
                            <h6>Product Code:{props._id}</h6>

                            <h5>Features:</h5>

                            <h6>{"- "+ item.features}</h6>
                            
                            {!(item.category === "decor") && (
                                <>
                                <h5>Care:</h5>
                                <h6>{"- "+ item.care}</h6>
                                </>
                            )}

                            {!(item.category === "decor") && (
                                <>
                                <h5>Size + Fit:</h5>
                                <h6>- Model wears size {item.size?.[0]}, Model height is {item.size?.[1]}</h6>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopInfo;