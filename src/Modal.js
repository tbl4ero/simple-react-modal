import React from "react";
import "./style.css";
import PropTypes from "prop-types";

const Modal = props => {
    return (
        <div>
            {props.display ? (
                <div className="modal">
                    <div
                        style={{
                            background:
                                props.background === undefined
                                    ? "rgba(0,0,0,0)"
                                    : props.background
                        }}
                        className="modal-wrapper"
                        onClick={props.closeModal}
                    >
                        <div
                            onClick={e => e.stopPropagation()}
                            className="modal-content"
                        >
                            {props.children}
                        </div>
                    </div>
                </div>
            ) : (
                ""
            )}
        </div>
    );
};

Modal.propTypes = {
    display: PropTypes.bool,
    background: PropTypes.string,
    closeModal: PropTypes.func
};

export default Modal;