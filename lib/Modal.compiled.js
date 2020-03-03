import React from "react";
import "./style.css";
import PropTypes from "prop-types";

const Modal = props => {
  return React.createElement("div", null, props.display ? React.createElement("div", {
    className: "modal"
  }, React.createElement("div", {
    style: {
      background: props.background === undefined ? "rgba(0,0,0,0)" : props.background
    },
    className: "modal-wrapper",
    onClick: props.closeModal
  }, React.createElement("div", {
    onClick: e => e.stopPropagation(),
    className: "modal-content"
  }, props.children))) : "");
};

Modal.propTypes = {
  display: PropTypes.bool,
  background: PropTypes.string,
  closeModal: PropTypes.func
};
export default Modal;
