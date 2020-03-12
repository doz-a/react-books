import React from "react";
import "./style.css";

function DeleteBtn(props) {
    return (
        <button className="delete-btn" {...props} role="button" tabIndex="0">
            Delete this Book
        </button>
    );
}

export default DeleteBtn;