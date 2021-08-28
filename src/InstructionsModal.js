import React, { Component } from "react";
import Modal from "./Modal";
import Instructions from "./Instructions";

export class InstructionsModal extends Component {
  modalProps = {
    triggerText: "Instructions",
  };
  modalContent = (
    <React.Fragment>
      <Instructions />
    </React.Fragment>
  ); //
  render() {
    return (
      <>
        <Modal modalProps={this.modalProps} modalContent={this.modalContent} />
      </>
    );
  }
}

export default InstructionsModal;
