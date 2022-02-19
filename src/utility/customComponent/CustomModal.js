import React from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const CustomModal = ({openModal,title,children,handleToogleModalClose,handleModalSubmit}) => {
  return (
    <div>
      <Modal
      isOpen={openModal}
      >
        <ModalHeader
        toggle={()=>{handleToogleModalClose()}}
        >{title}</ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <Button size="sm" color="primary"
          onClick={(e)=>handleModalSubmit(e)}
          >
            Ok
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CustomModal;
